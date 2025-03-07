// pages/api/firebase/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import { uploadToFirebase } from '@/lib/uploadFile'; // adjust the path as needed

// Allowed file extensions (including .svg)
const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];

// Mapping of file extensions to MIME types
const mimeTypes: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};

/**
 * Custom NodeFile class to mimic the browser File interface.
 * We extend Blob and implement the File interface.
 */
class NodeFile extends Blob implements File {
  name: string;
  lastModified: number;
  webkitRelativePath: string;

  constructor(fileBuffer: Buffer, name: string, options: { type: string; lastModified: number }) {
    super([fileBuffer], { type: options.type });
    this.name = name;
    this.lastModified = options.lastModified;
    this.webkitRelativePath = ''; // Set to empty string if not used
  }

  // Some Firebase internals expect a 'byteLength' property on File.
  // We define a getter that returns the Blob's size.
  get byteLength(): number {
    return this.size;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  try {
    const publicDir = path.join(process.cwd(), 'public');
    // Read all files in the public directory
    const allFiles = await fs.readdir(publicDir);
    // Filter files to include only allowed image extensions (case-insensitive)
    const imageFiles = allFiles.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return allowedExtensions.includes(ext);
    });

    if (imageFiles.length === 0) {
      console.warn('No image files found in the public directory.');
      return res.status(400).json({ success: false, error: 'No images available for upload' });
    }

    // Create an array of upload promises for each image file
    const uploadPromises = imageFiles.map(async (file) => {
      const filePath = path.join(publicDir, file);
      // Read file data as a Buffer
      const fileBuffer = await fs.readFile(filePath);
      const ext = path.extname(file).toLowerCase();
      const mimeType = mimeTypes[ext] || 'application/octet-stream';

      // Create a NodeFile instance that mimics a browser File
      const fileForUpload = new NodeFile(fileBuffer, file, { type: mimeType, lastModified: Date.now() });

      // Call uploadToFirebase with the custom File object and its filename
      const downloadURL = await uploadToFirebase(fileForUpload, file);
      return downloadURL;
    });

    // Wait for all uploads to complete concurrently
    const downloadURLs = await Promise.all(uploadPromises);

    // Respond with a structured JSON object containing the download URLs
    return res.status(200).json({
      success: true,
      uploadedCount: downloadURLs.length,
      downloadURLs,
    });
  } catch (error: any) {
    console.error('Error uploading images:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to upload images',
    });
  }
}

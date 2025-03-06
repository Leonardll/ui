
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytesResumable,
  StorageReference,
  UploadTask,
} from "firebase/storage";
import fs from "fs/promises";
import path from "path";
import { db } from "../firebaseConfig"; // import db from firebaseConfig.js
interface Metadata {
  contentType: string;
}
// Initialize storage with app
const storage = db;

const uploadToFirebase = async (file: File) => {
  // Log the items in the directory
  const storageRefList: StorageReference = ref(storage, "images/");
  const res = await listAll(storageRefList);

  console.log("Firebase Directory Contents:");
  for (const item of res.items) {
    console.log(item.fullPath);
  }
  const storageRef: StorageReference = ref(storage, `images/${file.name}`);
  const metadata: Metadata = {
    contentType: file.type,
  };
  const uploadTask: UploadTask = uploadBytesResumable(
    storageRef,
    file,
    metadata
  );
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            console.error("Unauthorized: Check your Firebase Storage permissions.");
            break;
          case "storage/canceled":
            console.error("Upload was canceled.");
            break;
          case "storage/unknown":
            console.error("Unknown error. Inspect the error object:", error);
            break;
        }
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          resolve(downloadURL);
        });
      }
    );
  });
};

const downloadUrl = async (): Promise<string[]> => {
  const storageRef: StorageReference = ref(storage, "images/");
  const res = await listAll(storageRef);
  const urls: string[] = await Promise.all(
    res.items.map(async (itemRef) => {
      return await getDownloadURL(itemRef);
    })
  );

  const jsonData = JSON.stringify(urls, null, 2);

  // Get the directory of the current file (uploadFile.ts)
  const currentDir = path.resolve("./public");

  // Construct the path to the data.json file in the same directory
  const filePath = path.join(currentDir, "data.json");

  try {
    await fs.writeFile(filePath, jsonData);
    console.log(`Data written to: ${filePath}`); // Log where the file is saved
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
  return urls;
};

export { uploadToFirebase, downloadUrl };

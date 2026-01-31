const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

async function run() {
    if (!uri) {
        console.error("No MONGODB_URI found in environment variables.");
        return;
    }
    console.log(`URI found: "${uri}"`);
    console.log(`URI length: ${uri.length}`);

    const client = new MongoClient(uri);

    try {
        console.log("Attempting to connect to MongoDB...");
        await client.connect();
        console.log("Connected successfully!");

        const db = client.db("my_Database");
        const collections = await db.listCollections().toArray();
        console.log("Available collections:", collections.map(c => c.name));

        const testCollection = db.collection("test");
        const stackCount = await testCollection.countDocuments();
        console.log(`Documents in 'test' collection: ${stackCount}`);

        const portfolioCollection = db.collection("portfolio");
        const portfolioCount = await portfolioCollection.countDocuments();
        console.log(`Documents in 'portfolio' collection: ${portfolioCount}`);

    } catch (err) {
        console.error("Connection error:", err);
    } finally {
        await client.close();
    }
}

run();

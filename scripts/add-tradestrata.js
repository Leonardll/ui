const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

async function run() {
    if (!uri) {
        console.error("No MONGODB_URI found in environment variables.");
        return;
    }

    const client = new MongoClient(uri);

    try {
        console.log("Connecting to MongoDB...");
        await client.connect();
        const db = client.db('my_Database');
        const portfolio = db.collection('portfolio');

        const tradeStrata = {
            title: "TradeStrata | Professional Trading Journal",
            shortDescription: "The professional workspace for serious capital.",
            description: "An institutional-grade platform for futures and crypto traders. Features automated execution imports, deep performance analytics, and AI-powered psychology coaching to detect tilt and optimize trading performance.",
            link: "https://www.tradestrata.net",
            category: "FinTech & AI",
            tags: ["Next.js", "TypeScript", "AI/ML", "Fintech", "Web3"],
            features: [
                "Automated Execution Sync",
                "Contextual AI Coaching",
                "Institutional Analytics (Profit Factor, Drawdown)",
                "Low Latency Data Sync",
                "Voice Journaling"
            ],
            // Demonstrating the ogImage logic
            ogImage: "https://app.tradestrata.net/opengraph-image.png?opengraph-image.0620dbf3.png",
            imgSrc: "", // Explicitly empty to test fallback to ogImage
            order: 0
        };

        // Check if it already exists
        const existing = await portfolio.findOne({ title: tradeStrata.title });
        if (existing) {
            console.log("TradeStrata already exists in portfolio. Updating...");
            await portfolio.replaceOne({ _id: existing._id }, tradeStrata);
        } else {
            console.log("Inserting TradeStrata into portfolio... ");
            await portfolio.insertOne(tradeStrata);
        }

        console.log("TradeStrata successfully integrated into the portfolio database with OG image support!");

    } catch (err) {
        console.error("Execution error:", err);
    } finally {
        await client.close();
    }
}

run();

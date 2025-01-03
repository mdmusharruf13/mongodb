const { MongoClient } = require('mongodb');

const URL = `mongodb://localhost:27017`
const client = new MongoClient(URL);
const dbName = "mydb";

async function connectToDB() {
    try {
        await client.connect();
        console.log(`connected to db`);
        const db = client.db(dbName);
        return db;
    }
    catch (error) {
        console.error("Failed to connect to the database", error);
        throw error;
    }
}

module.exports = { connectToDB };


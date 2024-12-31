const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = `mongodb://localhost:27017`;
let db;
let dbName = 'practice';
let collectionName = 'products';


async function connectToDB() {
    try {
        const client = await MongoClient.connect(`${url}/practice`);
        db = client.db(dbName);
        console.log('connected to db');
    } catch (err) {
        console.error("fail to connect mongodb", err);
    }
}
connectToDB();

app.get("/", async (req, res) => {
    try {
        if (!db) {
            res.status(500).send("Database not initialized");
        }
        const result = await db.listCollections().toArray();
        res.send(result);
    } catch (err) {
        console.log("Error fetching data");
        res.status(500).send("Error fetching data", err);
    }
});

app.get("/getData", async (req, res) => {
    try {
        if (!db) {
            return res.status(500).send("Database not initialized");
        }
        const result = await db.collection(collectionName).find().toArray();
        res.send(result);
    } catch (err) {
        console.error("Error fetching data", err);
        res.status(500).send('error fetching data');
    }
});

app.post("/insert", async (req, res) => {
    try {
        if (!db) {
            return res.status(500).send("Database not initialized");
        }
        const result = await db.collection(collectionName).insertOne({ name: "gaming mouse", price: 1500 });
        res.send(result);
    } catch (err) {
        console.error('Error fetching data', err);
        res.status(500).send('error fetching data');
    }
});

app.put("/updateOne", async (req, res) => {
    try {
        if (!db) {
            res.status(500).send("Database not initialized");
        }
        const result = await db.collection(collectionName).updateOne({ name: { $eq: 'gaming mouse' } }, { $set: { name: "optical mouse" } });
        res.send(result);
    } catch (err) {
        console.error('Error fetching data', err);
        res.status(500).send('error fetching data');
    }
});

app.delete("/deleteOne", async (req, res) => {
    try {
        if (!db) {
            res.status(500).send("Database not initialized");
        }
        const result = await db.collection(collectionName).deleteOne({ name: { $eq: 'optical mouse' } });
        res.send(result);
    } catch (err) {
        console.error('Error fetching data', err);
        res.status(500).send('error fetching data');
    }
});

app.listen(4000, () => {
    console.log('server running on 4000');
});
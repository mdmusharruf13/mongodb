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

app.listen(4000, () => {
    console.log('server running on 4000');
});
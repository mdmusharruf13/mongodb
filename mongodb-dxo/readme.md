### [MongoDB - Youtube Video](https://youtu.be/kjIPNVjaYPI?si=k1fl7Oo5KCwC0os_)

## MongoDB Practice

### Start Server on Windows

```
mongosh
```

### create or use Database

```
use mydb;
```

### list all Databases

```
show dbs;
```

### list collections

```
show collections;
```

### Create Collection in Database

```
db.createCollection(collectionName);
```

### Adding documents

```
db.collectionName.insertOne({key: value})
```

### Adding documents multiple documents

```
db.collectionName.insertMany([{key: value}, [key: value], ...])
```

### Get all data of a collection

```
db.collectionName.find();
```

### find Particular data

```
db.collectionName.find({key: value});
```

### find particular data get specific field

```
db.collectionName.find({}, {key: anyNumber});

// example
db.sample.find({}, {name: 1});
```

### finding one object

```
db.collectionName.findOne();
```

### Method chaining

```
db.collectionName.find().count();
db.collectionName.find().limit(number);
```

### sorting

```
db.collectionName.find().sort({key: number})

// example - sorting based on names
db.sample.find().sort({name: 1});
```

### operators

```
// greater than equal operator
db.collectionName.find({key: {$gte: value}});

// or operator
db.collectionName.find({$or: [{key: value}, {key: value}]});

// in operator
db.collectionName.find({key: {$in: [value1, value2, ...]}});
```

### delete one object

```
db.collectionName.deleteOne({key: value});
```

### delete multiple object

```
db.collectionName.deleteMany({key: value});
db.collectionName.deleteMany({key: {$in: [value1, value2,...]}});
```

### update one object

```
db.collectionName.updateOne({key: value}, {$set: {key: value}});
```

### update many object with operator

```
db.collectionName.updateMany({key: {$lt: value}}, {$set: {key: newValue}});
```

### Installations

```
npm init
npm i express
npm i mongodb
```

### Util function to establish Database connection

```js
const { MongoClient } = require("mongodb");

const URL = `mongodb://localhost:27017`;
const client = new MongoClient(URL);
const dbName = "mydb";

async function connectToDB() {
  try {
    await client.connect();
    console.log(`connected to db`);
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw error;
  }
}

module.exports = { connectToDB };
```

### Insert document in collection

```js
const { connectToDB } = require("../utils/db");

async function main() {
  try {
    const db = await connectToDB();
    const collection = db.collection("products");

    const data = [
      { name: "CPU", price: 25000 },
      { name: "desk", price: 2000 },
    ];

    const insertResult = await collection.insertMany(data);
    console.log(`${insertResult.insertedCount} docment inserted`);
  } catch (error) {
    console.error(error);
  }
}
main();
```

### Update document in collection

```js
const { connectToDB } = require("../utils/db");

async function main() {
  try {
    const db = await connectToDB();
    const collection = db.collection("products");

    const updateResult = await collection.updateMany(
      { name: "CPU" },
      { $set: { price: 20000 } }
    );
    console.log(`${updateResult.modifiedCount} docment updated`);
  } catch (error) {
    console.error(error);
  }
}
main();
```

### Delete document from collection

```js
const { connectToDB } = require("../utils/db");

async function main() {
  try {
    const db = await connectToDB();
    const collection = db.collection("products");

    const updateResult = await collection.deleteMany({ name: "desk" });
    console.log(`${updateResult.deletedCount} document deleted`);
  } catch (error) {
    console.error(error);
  }
}
main();
```

### Read documents from collection

```
const { connectToDB } = require('../utils/db');

async function main() {
    try {
        const db = await connectToDB();
        const collection = await db.collection('products');

        const readResult = await collection.find().toArray();
        console.log(JSON.stringify(readResult));
    }
    catch (error) {
        console.error(error);
    }
}
main();
```

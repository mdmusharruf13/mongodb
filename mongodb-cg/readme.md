### [MongoDB - Youtube Video](https://youtu.be/22oqSaTsn08?si=XOY7LMECHU63Udjf)

## MongoDB Practice

#### Start Server

```
mongosh
```

#### list all Databases

```
show dbs;
show databases;
```

#### Create Database

```
use databaseName;
```

#### Use Database

```
use databaseName;
```

#### Create Collection

```
db.createCollection(collectionName);
```

### list all collections

```
show collections;
```

### Delete collection

```
db.collectionName.drop();
```

### Delete Database

make sure you are inside that database

```
db.dropDatabase();

or

use deletingDatabaseNamme;
db.dropDatabase();
```

### See data in collection

```
db.collectionName.find();
```

### Insert data into collection

```
db.collectionName.insertOne({ key: value,....});

// object format { name: 'keyboard' }
```

### filter collection by condition

```
db.collectionName.find(condition)

// condition: { key: 'value' }
```

### filter one object from collection

```
db.collectionName.findOne(condition);

// condition: { key: 'value',...}
```

### Insert multiple objects into collection

```
db.collectionName.insertMany([{},{},...]);
```

### update objects collection

```
db.collectionName.update({ key: value }, { $set: { key: 'value',.... }})

// update({condition for identifying as key-value pair},{key-value pairs to update})
```

### delete one object from collection

```
db.collectionName.deleteOne({ key: 'value' });
```

### delete multiple objects from collection

all values must be of the same key from different objects

```
db.collectionName.deleteMany({ key: { $in : [value1, value2,...]}});

// example
db.products.deleteMany({ name: { $in: ['mouse','keyboard']}})
```

### **Operators**

**Note:** operators can also works on string, but it compares string lexically.

### equal operator : $eq

```
db.collectionName.find({ key: { $eq: value }});

// example
db.products.find({ price: { $eq: 600 }});
```

### greater-than operator: $gt

```
db.collectionName.find({ key : { $gt: value }});

// example
db.products.find({ price : { $gt: 600 }});
```

### greater-than-equal operator: $gte

```
db.collectionName.find({ key: { $gte: value }});

// example
db.products.find({ price: { $gte: 600 }});
```

### less-than operator: $lt

```
db.collectionName.find({ key: { $lt: value }});

// example
db.products.find({ price: { $lt: 600 }});
```

### less-than-equal operator: $lte

```
db.collectionName.find({ key: { $lte: value }});

// example
db.products.find({ price: { $lte: 600 }});
```

### not-equal operator: $ne

```
db.collectionName.find({ key: { $ne: value }});

// example
db.products.find({ price: { $ne: 400 }});
```

### in operator: $in

```
db.collectionName.find({ key: { $in: [value1, value2,...] }});

// example
db.products.find({ price: { $in: [400, 5000] }});
```

### not-in operator: $nin

```
db.collectionName.find({ key: { $nin: [value1, value2,...] }});

// example
db.products.find({ price: { $nin: [400, 5000] }});
```

### Logical Operators

### logical and operator: $and

```
db.collectionName.find({ $and: [{ key: value }, { key: value },...]});

// example
db.products.find({ $and: [{ price: { $gte: 600}}, { name: 'monitor'}]});
```

### logical or operator: $or

```
db.collectionName.find({ $or: [{ key: value }, { key: value },...]});

// example
db.products.find({ $or: [{ name: 'monitor' }, { price: { $gte: 1000 }}]});
```

### Indexing

- it is used to optimize query, and increase the speed.
- B-tree data structure is used to implement indexing in mongodb.

**Note:**

- only use indexing for more frequent reading.

### create indexes

```
db.collectionName.createIndex({ key: value })
```

### list all indexes

```
db.collectionName.getIndexes();
```

### delete index

```
db.collectionName.dropIndex('key_value');
```

### execution speed, scans and more...

```
db.collectionName.find({ key: value }).explain('executionStats');
```

### **CRUD with Nodejs**

### installations

```
npm init -y
npm install express
npm install mongodb
```

### import, initialize and connect to Database

```js
const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const url = `mongodb://localhost:27017`;
let db;
let dbName = "practice";
let collectionName = "review";

async function connectToDB() {
  try {
    const client = await MongoClient.connect(`${url}/practice`);
    db = client.db(dbName);
    console.log("Connected to Database");
  } catch (err) {
    console.error("failed to connect mongodb", err);
  }
}
connectToDB();

app.listen(4000, () => {
  console.log("server running on 4000");
});
```

### GET Request for listing collections in one DB

```js
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
```

### Get all Objects of collection using GET request

```js
app.get("/getData", async (req, res) => {
  try {
    if (!db) {
      return res.status(500).send("Database not initialized");
    }
    const result = await db.collection(collectionName).find().toArray();
    res.send(result);
  } catch (err) {
    console.error("Error fetching data", err);
    res.status(500).send("error fetching data");
  }
});
```

### Insert data into database using POST request

```js
app.post("/insert", async (req, res) => {
  try {
    if (!db) {
      return res.status(500).send("Database not initialized");
    }
    const result = await db
      .collection(collectionName)
      .insertOne({ name: "mechanical keyboard", price: 4000 });
    res.send(result);
  } catch (err) {
    console.error("Error fetching data", err);
    res.status(500).send("error fetching data");
  }
});
```

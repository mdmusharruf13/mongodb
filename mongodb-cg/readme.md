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

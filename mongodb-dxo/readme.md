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

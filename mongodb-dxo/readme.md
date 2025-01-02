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

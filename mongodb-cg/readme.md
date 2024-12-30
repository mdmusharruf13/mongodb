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
db.collectionName.insertOne({key: value,....});

// object format {name: 'keyboard'}
```

### filter collection by condition

```
db.collectionName.find(condition)

// condition: {key: 'value'}
```

### filter one object from collection

```
db.collectionName.findOne(condition);

// condition: {key: 'value',...}
```

### Insert multiple objects into collection

```
db.collectionName.insertMany([{},{},...]);
```

### update objects collection

```
db.collectionName.update({key:value},{ $set: {key: 'value',....}})

// update({condition for identifying as key-value pair},{key-value pairs to update})
```

### delete one object from collection

```
db.collectionName.deleteOne({key: 'value'});
```

### delete multiple objects from collection

all values must be of the same key from different objects

```
db.collectionName.deleteMany({key: { $in : [value1, value2,...]}});

// example
db.products.deleteMany({name: { $in: ['mouse','keyboard']}})
```

const express = require('express');
const { connectToDB, closeConnection } = require('./utils/db');

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const db = await connectToDB();
        const collection = db.collection('products');

        const result = await collection.find().toArray();

        res.json(result);
    } catch (error) {
        console.error(error);
    } finally {
        await closeConnection();
    }
});

app.post("/", async (req, res) => {
    try {
        const db = await connectToDB();
        const collection = db.collection('products');

        const data = req.body;

        const insertedResult = await collection.insertOne(data);

        res.send({ message: "inserted successfully", insertedResult });
    } catch (error) {
        console.error(error);
    } finally {
        await closeConnection();
    }
});

app.put("/products", async (req, res) => {
    try {
        const db = await connectToDB();
        const collection = db.collection('products');

        const [oldData, newData] = req.body;

        const updatedResult = await collection.updateOne(
            oldData, { $set: newData }
        );

        res.send({ message: "recieved successfully", updatedResult });
    } catch (error) {
        console.error(error);
    } finally {
        await closeConnection();
    }
});

app.delete("/deleteProduct", async (req, res) => {
    try {
        const db = await connectToDB();
        const collection = db.collection('products');

        const deleteObj = req.body;

        const deletedResult = await collection.deleteMany(deleteObj);

        res.send({ message: "deleted successfully", deletedResult });
    } catch (error) {
        console.error(error);
    } finally {
        await closeConnection();
    }
})

app.listen(3000, () => {
    console.log("server is running on 3000");
});
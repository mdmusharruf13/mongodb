const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mydb");

const BooksSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number
});

const Books = mongoose.model("books", BooksSchema);


app.get("/", async (req, res) => {
    try {
        const result = await Books.find();
        res.send({ message: "successfully read.", result });
        console.log("read successfully");
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
});

app.post("/", async (req, res) => {
    try {
        const newData = new Books({ ...req.body });
        const result = await newData.save();
        res.send({ message: "inserted successfully", result });
        console.log("inserted successfully");
    } catch (error) {
        res.status(500).json({ message: "error" });
    }
});

app.put("/:author", async (req, res) => {
    try {
        const author = req.params.author;
        const updatedRecord = req.body;
        console.log(author);
        const result = await Books.updateOne({ author: author }, updatedRecord);
        res.send({ message: "updated successfully", result });
        console.log("updated successfully");
    } catch (error) {
        res.status(500).json({ message: "error updating data", error });
    }
});

app.delete("/:author", async (req, res) => {
    try {
        const author = req.params.author;
        const result = await Books.deleteOne({ author: author });
        res.send({ message: "deleted successfully", result });
        console.log("deleted successfully");
    } catch (error) {
        res.status(500).json({ messge: "error deleting data", error });
    }
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
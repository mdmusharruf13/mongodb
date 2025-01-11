const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const UserModel = mongoose.model('student', UserSchema);

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mydb');
    console.log("connected to db");

    const newData = new UserModel({
        name: "musharruf",
        age: 25
    });

    await newData.save();
    console.log("data added successfully");
}

main();
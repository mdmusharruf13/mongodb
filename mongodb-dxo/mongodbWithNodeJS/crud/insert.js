const { connectToDB } = require('../utils/db');

async function main() {
    try {
        const db = await connectToDB();
        const collection = db.collection('products');

        const data = [
            { name: 'CPU', price: 25000 },
            { name: 'desk', price: 2000 },
        ];

        const insertResult = await collection.insertMany(data);
        console.log(`${insertResult.insertedCount} docment inserted`);
    }
    catch (error) {
        console.error(error);
    }
}
main();
const { connectToDB } = require('../utils/db');

async function main() {
    try {
        const db = await connectToDB();
        const collection = db.collection('products');

        const updateResult = await collection.updateMany({ name: "CPU" }, { $set: { price: 20000 } });
        console.log(`${updateResult.modifiedCount} docment updated`);
    }
    catch (error) {
        console.error(error);
    }
}
main();
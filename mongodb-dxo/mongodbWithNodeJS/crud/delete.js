const { connectToDB } = require('../utils/db');

async function main() {
    try {
        const db = await connectToDB();
        const collection = db.collection('products');

        const updateResult = await collection.deleteMany({ name: "desk" });
        console.log(`${updateResult.deletedCount} document deleted`);
    }
    catch (error) {
        console.error(error);
    }
}
main();
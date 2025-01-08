const { connectToDB } = require('../utils/db');

async function main() {
    try {
        const db = await connectToDB();
        const collection = await db.collection('products');

        const readResult = await collection.find().toArray();
        console.log(JSON.stringify(readResult));
    }
    catch (error) {
        console.error(error);
    }
}

main();
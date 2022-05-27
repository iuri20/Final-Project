
const { MongoClient, ObjectId } = require('mongodb')

const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
//const URL = "mongodb://localhost:27017"

async function connectToMongo() {
    try {
        return await MongoClient.connect(URL)
    } catch (err) {
        console.log(err)
    }
}

async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}


module.exports = { connectToMongo}
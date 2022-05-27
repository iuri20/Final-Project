const { MongoClient} = require("mongodb");
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const DB_NAME = "ecobooks"
const COLLECTION_USERS = "clients"

let client;

async function connectToMongo() {
    try {
        if (!client) { client = await MongoClient.connect(URL)}
        return client
    } catch (errors) {
        console.log(errors)
    }
}
//      "ola", "mundo"
async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}

async function findUserByEmail(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.findOne({ email: email })
    // return await collection.find({email: email}).toArray()[0]
}

async function createUser(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.insertOne({...data, points:0})
}


module.exports = {
    getMongoCollection,
    findUserByEmail,
    createUser,
}
import { MongoClient } from 'mongodb'

const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
//const URL = "mongodb://localhost:27017"

export default async function connectToMongo() {
    try {
        return await MongoClient.connect(URL)
    } catch (err) {
        console.log(err)
    }
}

export default async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}



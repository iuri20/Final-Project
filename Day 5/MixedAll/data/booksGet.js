import { getMongoCollection } from "./signupin"
const DB_NAME = "ecobooks"
const COLLECTION_BOOKS = "books"

export async function findAllBookDB() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_BOOKS)
    return await collection.find().toArray()
}
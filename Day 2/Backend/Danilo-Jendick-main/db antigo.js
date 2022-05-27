
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


async function signUpDB1(data) {
    const collection = await getMongoCollection("teste", "colecao")
    const id = await collection.findOne({ id: data.id })
    if (id) { return false }
    const result = await collection.insertOne(data)
    console.log(result)
    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~insertOneWriteOpResult
    return result.insertedId
}

async function get1(data) {
    const collection = await getMongoCollection("teste", "colecao")
    if (ObjectId.isValid(data)) { return result = await collection.findOne({ _id: new ObjectId(data) })}
    else { return null }
    
}

async function patch1(data, body) {
    const collection = await getMongoCollection("teste", "colecao")
    if (ObjectId.isValid(data)) { 
        return result = await collection.updateOne(
            { _id: new ObjectId(data) },
            {$set : {id : body.id, content: body.content}}
            )}
    else { return null } 
}



async function post2(data) {
    const collection = await getMongoCollection("teste", "colecao")
    const result = await collection.insertOne(data)
    console.log(result)
    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~insertOneWriteOpResult
    return result.insertedId
}

async function get2() {
    const collection = await getMongoCollection("teste", "colecao")
    const result = await collection.find().toArray()
    return result
  }

//get2().then((docs) => console.log("g2", docs) )

//3


async function get3(data) {
  const collection = await getMongoCollection("teste", "colecao")
  if (ObjectId.isValid(data)) { 
      return result = await collection.findOne({ _id: new ObjectId(data) })}
  else { return null }
 
}

//get3().then((docs) => console.log("g3 ", docs))


async function patch4(data, body) {
    const collection = await getMongoCollection("teste", "colecao")
    if (ObjectId.isValid(data)) { 
        return result = await collection.updateOne(
            { _id: new ObjectId(data) },
            {$set : body}
            )}
    else { return null } 
}

async function delete5(data, body) {
    const collection = await getMongoCollection("teste", "colecao")
    if (ObjectId.isValid(data)) { 
        return result = await collection.deleteOne({_id: new ObjectId(data) })}
    else { return null } 
}

module.exports = { connectToMongo, signUpDB1, get1, patch1, post2, get2, get3, patch4, delete5 }
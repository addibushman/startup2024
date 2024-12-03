const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');  // Change 'startup' to your db name
const userCollection = db.collection('users');
const outfitCollection = db.collection('outfits');

// Test connection
(async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Unable to connect to database: ${error.message}`);
    process.exit(1);
  }
})();

async function getUserByEmail(email) {
  return userCollection.findOne({ email });
}

async function getUserByToken(token) {
  return userCollection.findOne({ token });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),  // Create a unique token for the user
  };
  await userCollection.insertOne(user);
  return user;
}

async function addOutfit(outfit) {
  await outfitCollection.insertOne(outfit);
}

async function getOutfits() {
  return await outfitCollection.find({}).toArray();
}

module.exports = {
  getUserByEmail,
  getUserByToken,
  createUser,
  addOutfit,
  getOutfits,
};

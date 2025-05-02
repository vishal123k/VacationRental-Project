const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/VHR";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  data.data = data.data.map((obj)=>({...obj, owner:"66e5f9b721a374381be9751b"}));
  await Listing.insertMany(data.data);
  console.log("data was initialized");
};

initDB();
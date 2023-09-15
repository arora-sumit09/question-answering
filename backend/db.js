// this is the connection 
const mongoose = require("mongoose");

const url ="mongodb+srv://20ucs204:20ucs204@cluster0.vei5yra.mongodb.net/quora-clone?retryWrites=true&w=majority"
 
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
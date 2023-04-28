const mongoose = require('mongoose');
const mongoUri = "mongodb://127.0.0.1:27017/NoteIt";

const connectToDB = async()=>{
    await mongoose.connect(mongoUri);
    console.log("Connected>>");
}
module.exports = connectToDB;
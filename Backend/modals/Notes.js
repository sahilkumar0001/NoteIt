const mongoose = require('mongoose')
const {Schema}=mongoose
const NoteSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('notes',NoteSchema);
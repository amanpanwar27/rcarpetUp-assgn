const mongoose = require('mongoose');
const taskboxschema = new mongoose.Schema({
    title:{
        type:String
    },
    insidelist:[
        {
            type:mongoose.Types.ObjectId
        }
    ]
},{
    timestamps:true
});
const alltaskbox = mongoose.model("alltaskbox",taskboxschema);
module.exports = alltaskbox;
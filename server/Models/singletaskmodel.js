const mongoose = require('mongoose');
const task = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    }
},{
    timestamps:true
});
const tasks = mongoose.model("singletask",task);
module.exports = tasks;
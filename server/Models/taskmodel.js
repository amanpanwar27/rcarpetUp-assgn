const mongoose = require('mongoose');
const taskschema = new mongoose.Schema({
    alltasksboxes:[{
        listids:{
            type:mongoose.Types.ObjectId,
        }
    }]
},{
    timestamps:true
});
const alltasks = mongoose.model("alltasks",taskschema);
module.exports = alltasks;
const mongoose = require('mongoose');
const taskboxid = new mongoose.Schema({
    boxid:{
        type:mongoose.Types.ObjectId
    }
},{
    timestamps:true
});
const taskboxesid = mongoose.model("boxids",taskboxid);
module.exports = taskboxesid;
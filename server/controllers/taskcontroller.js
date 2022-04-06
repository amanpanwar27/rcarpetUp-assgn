
const singletaskschema = require('../Models/singletaskmodel');
const taskboxschema = require('../Models/taskboxmodal');
const taskboxids = require('../Models/alltaskboxesid');
const alltaskbox = require('../Models/taskboxmodal');
module.exports.addtaskcontroller = (req,res)=>{
    console.log("hii there********");
    singletaskschema.create({
        title:req.body.title,
    },(doc,err)=>{
        if(err)console.log(err);
        console.log("*****created single task",doc);
    });
}

module.exports.addlistcontroller = (req,res)=>{
    console.log("*&&&&&&&&&&&&&");
    console.log("*****",req.body);
    taskboxschema.create({
        title:req.body.title
    },(err,doc)=>{
        if(err)console.log(err);
        console.log("****** new task list added",doc);
        taskboxids.create({
            boxid:doc._id
        },(err,doc)=>{
            if(err)console.log(err);
            console.log("sucessfully box id is stored",doc);
        })
        res.send({
            id:doc._id
        }).status(201)
    });
}

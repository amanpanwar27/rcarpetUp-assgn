const express = require('express');
const mongoose = require('mongoose');
const Route = require('./server/Routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const PORT  = process.env.PORT;

mongoose.
connect("mongodb+srv://aman:Aman123@cluster0.zcnvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
).then(()=>{
    console.log("sucessfully connected to database");
}).catch((err)=>{
    console.log("error connecting to database ",err);
});



const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(cors());

app.use("/",Route);

try{
    app.listen(PORT,()=>console.log(`sucessfully listening to port : ${PORT}`));
}
catch(err){
    console.log(`error listening to server : ${err}`);
}
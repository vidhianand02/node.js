const express = require('express')
const app=express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
.connect("mongodb://anu:anucool123@ds231537.mlab.com:31537/college-api", {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(console.log("MongoDbConnected"))
.catch((err)=> console.log(err));

const news = require("./routes/news");
app.use("/news1", news);

port = process.env.PORT|| 5000;
app.listen(5000, ()=>{
    console.log("Server running at port:"+ port);
});
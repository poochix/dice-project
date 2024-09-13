const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/dice.html");
});

app.listen(3000, function(){
    console.log("server initiated");

});

app.get("/dice.css", function(req, res){
        res.sendFile(__dirname + "/" +"dice.css");

});

app.get("/dice.js", function(req, res){

       res.sendFile(__dirname + "/" + "dice.js");

});

app.use(express.static('public'));
app.use('/images' ,  express.static('images'));


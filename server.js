// node js + express 

var file = require('file-system');
var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express();
const port = process.env.PORT || 8080;

fs.readFile('./MCQ.json','utf8',(err,data)=>{

    if(err){
        console.log("ERROR hai bahaiya");
    }
else {
    // pehle parse karenge data ko 
    const HamaraData = JSON.parse(data);
    console.log(HamaraData.branch[0].semester[1].subjects[4].code);
}
})


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
   



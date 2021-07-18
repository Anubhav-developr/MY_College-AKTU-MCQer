// CRUD 
const mongodb = require('mongodb')
const Mongoclient = mongodb.Mongoclient
const connectURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
Mongoclient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{
    if(error){
       return console.log("cannot connect")

    }
    console.log('connected correctly')

})
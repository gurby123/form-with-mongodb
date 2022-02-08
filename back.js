const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const port = 80
const server = '127.0.0.1'


const mongoose = require('mongoose');
// const { emitKeypressEvents } = require('readline')
mongoose.connect('mongodb://localhost:27017/kishan', { useNewurlParser: true, useUnifiedTopology: true })
// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error'))
// db.once('open', function () {
//     console.log('you are connected')
// })
const kittySchema = new mongoose.Schema({
    name: String , age:Number , address: String , gender: String
});                   //making schema is like define object style
// kittySchema.methods.speak = function speak() {
//     const greeting = 'my name is ' + this.name

//     console.log(greeting);
// };
const Kitten = mongoose.model('form details', kittySchema); //lock schema
// const obj1 = new Kitten({ name: 'KISHAN', age:21 });
// obj1.save(function(err,obj1){
//     if(err) return console.error(err)
//     // obj1.speak()
// })
// const obj2 = new Kitten({ name: 'KISHAN1',age:22 });
// obj2.save(function(err,obj2){
//     if(err) return console.error(err)
//     // obj2.speak()
// })
// const obj1= new Kitten({name:'kishan'})
// obj1.save()

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));
app.use('/', require(path.join(__dirname, 'routers/route.js')))
app.post('/', (req, res) => {


    res.sendFile(path.join(__dirname, 'templetes/home.html'))
    let name = req.body
    let age = req.body.age
    let address = req.body.address
    let gender = req.body.gender
    console.log(req.body)
    obj=new Kitten(name)
    obj.save()
    
   
})
 


// Kitten.updateMany({name:'kishan'},{$set:{address:'newzlend'}},function(err,success){
//     if(err) return console.log(err)
//     console.log('done')
// })
app.listen(port, server, () => {
    console.log(`server is running on http://${server}:${port}`)
})
// Kitten.find({name:'kishan'},function(err,kit){
//     if (err) return console.log(err);
//     console.log(kit);

// })


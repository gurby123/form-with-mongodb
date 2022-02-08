const express=require('express')
const app=express()
const path=require('path')
const route=express.Router()
route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templetes/home.html'))
})
route.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templetes/contact.html'))
})
route.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templetes/about.html'))
})
route.get('/about/new',(req,res)=>{
    res.send('hiiighh')
})


module.exports=route
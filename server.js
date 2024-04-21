const express = require('express');

const app = express();

const http = require('http');

app.use(express.static('public'));

const port= process.env.PORT || 3000;

app.listen(port);

app.use(express.static('public'));

//Requests
app.get('/', (req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
});
app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname})
});
app.get('/education',(req,res)=>{
    res.sendFile('./views/education.html',{root:__dirname})
});
app.get('/accomplishments',(req,res)=>{
    res.sendFile('./views/accomplishments.html',{root:__dirname})
});
app.get('/projects',(req,res)=>{
    res.sendFile('./views/projects.html',{root:__dirname})
});
app.get('/gallery',(req,res)=>{
    res.sendFile('./views/gallery.html',{root:__dirname})
});


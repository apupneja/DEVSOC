const express= require('express');
const mongoose= require('mongoose');
const Faculty= require('./models/faculty');
app=express();

const dbURI= "A secure link that I wont share as of now due to security reasons";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true})
.then((result)=> app.listen('8080')).
catch((err) => console.log(err));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    Faculty.find().sort()
    .then((result)=>{
        res.render('faculty', {title: "Faculty info", faculty: result})
    })
    .catch((err)=>console.log(err));
})

app.get('/add', (req, res)=>{
    res.render('add', {title: "Add faculty"});
})

app.post('/add', (req, res)=>{
    const faculty= new Faculty(req.body);
    faculty.save()
    .then((result)=>res.redirect('/'))
    .catch((err)=>console.log(err));
})
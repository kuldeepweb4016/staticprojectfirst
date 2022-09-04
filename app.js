const express = require('express')//funantion
const app = express()//module

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})
app.get('/blog',(req,res)=>{
    res.render('blog.ejs')
})
app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/portfolio-details',(req,res)=>{
    res.render('portfolio-details.ejs')
})
app.get('/portfolio',(req,res)=>{
    res.render('portfolio.ejs')
})
app.get('/services-details',(req,res)=>{
    res.render('services-details.ejs')
})
app.get('/services',(req,res)=>{
    res.render('services-details.ejs')
})


app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(5000,()=>{
    console.log("server is running this port 5000")
})
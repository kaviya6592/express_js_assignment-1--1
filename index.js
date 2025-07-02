const express = require('express');
const routes= require('./config/routes');
require("./config/mongoose")

const app = express();
//config/routes.js file


//public is the folder of style.css
app.use("/public",express.static('public'));
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use(routes);

app.listen(1200, () => console.log('Server is on 1200'));
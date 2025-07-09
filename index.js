
const express = require('express');
const app = express();
//const routes= require('./config/routes');
const api_routes= require('./config/apiroutes');
require("./config/mongoose")









app.use("/public",express.static('public'));
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use(api_routes);

app.listen(1200, () => console.log('Server is on 1200'));







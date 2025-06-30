const express = require('express');
const routes= require('./config/routes');

const app = express();
//config/routes.js file



app.use("/public",express.static('public'));
app.set('view engine','ejs')



app.use(routes);

app.listen(1200, () => console.log('Server is on 1200'));
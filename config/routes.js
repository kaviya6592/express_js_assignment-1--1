const express=require("express");
const route=express.Router();
const controller_file=require('../controller/user_controller')
// routes
route.get('/',controller_file.homepage)


route.get('/about',controller_file.secondpage)


//route.get('/about/:username',controller_file.thirdpage)

route.get('/about_data',controller_file.thirdpage)

module.exports=route;

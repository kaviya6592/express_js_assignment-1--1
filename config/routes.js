const express=require("express");
const route=express.Router();
const controller_file=require('../controller/user_controller')
// routes
route.get('/',controller_file.homepage)

route.post('/add-user',controller_file.adduser);



route.post('/delete-user/:id',controller_file.deleteuser);


route.post('/update-user/:id',controller_file.edituser);


route.post('/edit-user/:id',controller_file.edituserform);









route.get('/about',controller_file.secondpage)




//route.get('/about/:username',controller_file.thirdpage)

route.get('/about_data',controller_file.thirdpage)

module.exports=route;

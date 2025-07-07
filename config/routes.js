const express=require("express");
const route=express.Router();
const controller_file=require('../controller/post_controller')
// routes
route.get('/',controller_file.homepage)

route.post('/add-post',controller_file.addpost);

route.post('/delete-post/:id',controller_file.del_post);

route.post('/add-comment/:id',controller_file.addcomment);

route.post('/delete-comment/:comment_id/:id',controller_file.deletecomment);

route.get('/{*any}', controller_file.notFoundPage);

module.exports=route;

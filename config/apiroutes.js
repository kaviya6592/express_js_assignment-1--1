const express = require('express');
const route=express.Router();
const controller_file=require('../controller/apiroutes')
// api routes
route.get('/',apiroutes.homepage)

route.post('/add-post',apiroutes.addpost);

route.delete('/delete-post/:id',apiroutes.del_post);


route.put('/edit-post/:id',apiroutes.editpage);


route.put('/edit-post-text/:id',apiroutes.editpost);





//comment post api
route.post('/add-comment/:id',apiroutes.addcomment);

route.delete('/delete-comment/:comment_id/:id',apiroutes.deletecomment);

route.get('/{*any}',apiroutes.notFoundPage);

module.exports=route;




const express = require('express');
const router = express.Router();
const api = require('../controller/apiController');

// Post APIs
router.get('/posts', api.getPosts);
router.post('/posts', api.createPost);
router.put('/posts/:id', api.updatePost);
router.delete('/posts/:id', api.deletePost);

// Comment APIs
router.get('/comments', api.getComments);
router.post('/comments', api.createComment);
router.put('/comments/:id', api.updateComment);
router.delete('/comments/:id', api.deleteComment);

module.exports = router;
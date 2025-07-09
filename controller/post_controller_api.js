const comment_model=require("../models/comment_model")
const post_model = require("../models/post_model")

const homepage=(req,res)=>{
    
   // get all post from db
   const post= post_model.find().populate("comments","_id body");
   res.json(post)
    
    
};

const addpost=(req,res)=>{

  let newuser=new post_model(req.body)
  console.log(newuser)
  newuser.save()
  res.status(201).json(newuser)
};



//delete user
const del_post=(req,res)=>{
  console.log(req.params.id);
  post_model.findByIdAndDelete(req.params.id)
  res.json({message:"post deleted"});

};



const editpage=(req,res)=>{
  
  const id=req.params.id;
  const result=post_model.findById(id)
  res.json(result)
  

};

const editpost=(req,res)=>{
  
  const id=req.params.id;
  console.log("postid"+id)
 const updated= post_model.findByIdAndUpdate(id,{body:req.body.body})
  res.json(updated)
};
  

    


  



const addcomment=(req,res)=>{

  //console.log(req.params.id)//id of post
  let post_id1=req.params.id;

  if(req.body.comment !=" " && post_id1){
    let commentdata={
      ...req.body,
      //post_id from comment model
      post_id:post_id1

                  }

     
    let newcomment=new comment_model(commentdata)
    newcomment.save()


    .then( data =>{
      //update post table to add comment id
      post_model.findById(post_id1)

          .then(postinfo=>{
                postinfo.comments.push(newcomment._id)
                postinfo.save()

                         .then(result=>{
                               res.redirect("/")
                                    })
        
                              .catch(err=>{
                                 res.status(500).json({ error: 'Failed to add comment.' });
                              })
           })         

                .catch(err=>{
                   res.status(500).json({ error: 'Failed to add comment.' });
                       })         
     })
      
    .catch(err=>{
     
res.status(500).json({ error: 'Failed to add comment.' });
    })
    
  
  }
}

  







//const notfound=(req,res)=>{
  //res.send("404 page not found")
//}

const deletecomment=(req,res)=>{
  const commentId = req.params.comment_id;
  const postId = req.params.id;

console.log(commentId+postId)
  comment_model.findByIdAndDelete(commentId)
  res.json({message:"comment deleted"})
};

const notFoundPage = (req,res) => {
  res.status(404).json({ err: 'Page not found'});
};



module.exports={
    
  homepage,
  addpost,
  del_post,
  editpage,
  editpost,
  addcomment,
  deletecomment,
  notFoundPage
}
  
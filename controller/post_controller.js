
const comment_model=require("../models/comment_model")
const post_model = require("../models/post_model")

const homepage=(req,res)=>{
    //res.send("home page")
    //render send to homepage ejs
    // get data from db
    post_model.find()
    .populate("comments","_id body")
    .then(result=>{
     console.log("post info"+result)
    res.render("homepage",{
     
      data:result,
      error:" "
     })
    })
 
    .catch((err)=>{
      console.log(err)

    })
    
}

const addpost=(req,res)=>{

  let newuser=new post_model(req.body)
  console.log(newuser)
  newuser.save()
  .then(()=>{
    res.redirect('/')
    console.log("db saved")
    })

  .catch((err)=>{
    res.send(err)
  })
  

}





//delete user
const del_post=(req,res)=>{
  console.log(req.params.id);
  post_model.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=>{
    res.send(err)
  })
  

}







const addcomment=(req,res)=>{

  console.log(req.params.id)//id of post
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
                                 onsole.log(err)
                              })
           })         

                .catch(err=>{
                    console.log(err)
                       })         
     })
      
    .catch(err=>{
      console.log(err)

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
  .then((data)=>{
    //res.send("comment delete from comment model")
    res.redirect("/")

  })

  .catch(err=>{
        console.log(err)
      })

    }  
    


const notFoundPage = (req,res) => {
  res.send('404, Page not found');
}



module.exports={
    
  homepage,
  addpost,
  del_post,
  addcomment,
  deletecomment,
  notFoundPage
}
  
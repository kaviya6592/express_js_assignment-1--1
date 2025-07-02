const usermodel=require("../models/user_model")

const edituser=(req,res)=>{
  //get user info from id
  usermodel.findById(req.params.id)

  //user info has all inforamtio from db
  .then(userinfo=>{
    //to get users all information
    //console.log(user)
    res.render("edit_user",{
      user:userinfo
    })
  })
   .catch(err=>{
  console.log(err)
  })
}

const edituserform=(req,res)=>{

  usermodel.findByIdAndUpdate(req.params.id,req.body)

  .then(()=>{res.redirect("/")})
   .catch(err=>{console.log(err)
  })
}



const adduser=(req,res)=>{

  let newuser=new usermodel(req.body)
  console.log(newuser)
  newuser.save()
  .then(()=>{
    res.redirect('/')
    console.log("db saved")
    })

  .catch((err)=>{
    console.log(err)
  })

}

//delete user
const deleteuser=(req,res)=>{
  console.log(req.params.id);
  usermodel.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=>{
    res.send(err)
  })
  

}

//updateuser
const updateuser=(req,res)=>{

  usermodel.findById(req.params.id)
  .then((user)=>{
    console.log(user)
  })
  .catch((err)=>{
    res.send(err)
  })
  

}

const homepage=(req,res)=>{
    //res.send("home page")
    //render send to homepage ejs
    // get data from db
    usermodel.find()
    .then(result=>{
    res.render("homepage",{
      data:result,
     })
    })
 
    .catch((err)=>{
      console.log(err)

    })
    
}






const secondpage=(req,res)=>{
    //res.send("second page")
    res.render("secondpage",{
        isadmin:true,
        email:"sbkavi@gmail.com"
    })
  
}

const thirdpage=(req,res)=>{
    //console.log(req.params)
    //res.send("username" +req.params.username)

    let data_val= [

    { name : "Michael Choi1",
      createdAt : "30-01-2013",
      message : "This is my message    This is my message This is my message This is my messageThis is my message"
    },
    { name : "Michael Choi2",
      createdAt : "23-01-2013",
      message : "This is my message    This is my message This is my message This is my messageThis is my message"
    },
    { name : "Michael Choi3",
      createdAt : "28-01-2013",
      message : "This is my message    This is my message This is my message This is my messageThis is my message"
    }

]

//res.send("username"+req.params.username)
res.render("thirdpage",{
    data:data_val
  
})
}

module.exports={
    adduser,
    homepage,
    deleteuser,
    updateuser,
    edituser,
    edituserform,
    secondpage,
    thirdpage
}

const homepage=(req,res)=>{
    //res.send("home page")
    //render send to homepage ejs
    res.render("homepage")
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
    homepage,
    secondpage,
    thirdpage
}

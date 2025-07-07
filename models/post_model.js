const mongoose=require("mongoose")
const Schema1=mongoose.Schema;


const postschema=new Schema1({
   body:{
    type:String,
    required:true
   

   },
   //one post has mutiple comments

   comments:[
      {
         type:Schema1.Types.ObjectId,
         ref:"add_comment"
      }

   ]



})

//books is table name in database
module.exports=mongoose.model("add_post",postschema);
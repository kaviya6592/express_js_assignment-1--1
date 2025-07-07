const mongoose=require("mongoose")
const Schema1=mongoose.Schema;


const commentschema=new Schema1({
   comment:{
    type:String,
    required:true

   },
   //one one relationship .one post one comment.commnet belong to which post ?get id of post storein commnent db
   //one comment for one post one to one relationship
   post_id:{
    type:Schema1.Types.ObjectId,
    ref:"add_post"
    
   }



})

//books is table name in database
module.exports=mongoose.model("add_comment",commentschema);
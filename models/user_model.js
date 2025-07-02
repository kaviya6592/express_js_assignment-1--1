const mongoose=require("mongoose")
const schema1=mongoose.Schema;


const bookschema1=new schema1({
   username:{
    type:String,
    required:true

   },

email:{
    type:String,
    required:true

   }


})

//books is table name in database
module.exports=mongoose.model("books_info",bookschema1);
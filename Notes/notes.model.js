const mongoose=require("mongoose")

const NotesSchema=new mongoose.Schema({
      title:{type:String},
      note:{type:String},
},{timestamps:true})

const NotesModel=mongoose.model("Notes",NotesSchema)

module.exports={NotesModel}
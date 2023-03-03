const express=require("express")
const { NotesModel } = require("./notes.model")

const notes=express.Router()

notes.get("/",async(req,res)=>{
     try {
          let notesData=await NotesModel.find()
          res.send({data:notesData})
        
     } catch (error) {
        res.status(500).send(error.message)
     }
})




notes.post("/",async(req,res)=>{
     
    const {title,note}=req.body
    
    try {
         let saveData=await NotesModel.create({title,note})
         res.send({message:"Note create Successfully ",data:saveData})
       
    } catch (error) {
       res.status(500).send(error.message)
    }
})


notes.delete("/:id",async(req,res)=>{
        
    const {id}=req.params
     
    try {
         
         let deleteNote=await NotesModel.findByIdAndDelete(id)
         res.send({message:"User Deleted Successfully" ,data : deleteNote})

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports=notes
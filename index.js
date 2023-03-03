const express=require("express")
const cors=require("cors")
const { DBconnect } = require("./DBconnect/connect")
const { notesRouter } = require("./Notes")

const app=express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use("/notes",notesRouter)

app.get("/",(req,res)=>{
    res.send("hello world i am here ")
})


app.listen(8000,async(req,res)=>{
    await DBconnect()
    console.log("server started at port 8000")
})

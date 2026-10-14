const express = require("express")
const noteModel = require("./models/notes.model.js")

const app = express()

app.use(express.json())

//POST /notes
//=req.body = {title,description}
app.post("/notes", async (req,res)=>{
  const {title,description} = req.body

  const note =  await noteModel.create({
    title,description
  })

  res.status(201).json({
    message: "Note created successfully",
    note
  })
})

//GET /notes
//fetch all the data 
app.get("/api/notes", async (req,res)=>{
  const notes = await noteModel.find()

  res.status(201).json({
    message: "Note fetch successfully",
    notes
  })


})




module.exports = app
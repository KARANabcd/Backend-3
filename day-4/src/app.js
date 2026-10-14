//server ko create karna

const express = require("express")

const app = express() //server create ho gaya hai

app.use(express.json())

const notes = []

//GET /notes
app.get("/notes",(req,res)=>{
  res.send(notes)
})

//POST /notes
app.post("/notes",(req,res)=>{
  console.log(req.body);
  notes.push(req.body)
 console.log(notes);
 
  
  res.send("notes created")
}) 

//DELETE /notes
app.delete("/notes/:index",(req,res)=>{
  delete notes [req.params.index]
  res.send("notes deleted successfully")

  
})

app.patch("/notes/:index",(req,res)=>{
  notes [req.params.index].description = req.body.description

  res.send("note updated successfully")
})


module.exports = app
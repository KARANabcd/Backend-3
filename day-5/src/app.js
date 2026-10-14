const express = require("express")

const app = express()  


app.use(express.json())

const notes = []

//POST /notes
app.post("/notes",(req,res)=>{

console.log(req.body);
notes.push(req.body)
console.log(notes);


 res.status(201).json({
  message: "Note created successfully"
 })
})

//GET /notes

app.get("/notes",(req,res)=>{
  res.status(201).json({
  message: "Note created successfully"
 })
})
//DELELTE /patch

app.delete("/notes/:index",(req,res)=>{
  
  

  res.status(200).json({
    message: "Notes deleted successfully"
  })
})

//PATCH //notes/:index
app.patch("/notes/:index",(req,res)=>{
   notes [req.params.index].description = req.body.description
  res.status(200).json({
    message: "Notes updated successfully"
  })
})






module.exports = app
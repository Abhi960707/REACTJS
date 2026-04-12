// const express = require("express")
// const app = express()

// app.get("/", (req,res)=>{
// res.send("Server running")
// })

// app.listen(5000, ()=>{
// console.log("Server running on port 5000")
// })

const express = require("express")
const cors = require("cors")

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// test route
app.get("/", (req,res)=>{
res.send("Server running")
})

// auth route
app.use("/api/auth", require("./routes/auth"))

app.listen(5000, ()=>{
console.log("Server running on port 5000")
})
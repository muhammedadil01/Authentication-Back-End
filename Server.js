const express = require("express")
const connectDB = require("./Config/Database")
const router = require("./Route/Router")
const dotenv =require("dotenv")
const cors = require("cors")


const app = express()
connectDB()
dotenv.config();

app.use(express.json())
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)

app.use("/",router)

app.get("/",(req,res)=>{
    res.send("<h1>Port is Working</h1>")
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{console.log(`Server Is Working${PORT}`);})
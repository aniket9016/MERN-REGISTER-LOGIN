import express from "express"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute.js"
import cors from "cors"
const app = express()
const port = 3000
mongoose.connect("mongodb://127.0.0.1:27017/userdb")
const db = mongoose.connection
db.once("open",()=> {
    console.log("Connection established");
})
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())
app.use("/api", userRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}` )
})
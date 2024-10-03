import express from "express"
import User from "../model/userSchema.js"
const router = express.Router()

router.get("/getusers", async (req, res)=>{
    const finduser =await User.find()
    if (!finduser) {
        return res.json({ message: "no user found" })
    }
    res.json(finduser)
})

router.post("/createuser", async (req, res) => {
    const createuser = await User.create(req.body)
    if (!createuser) {
        return res.json({ message: "no user created" })
    }
    res.json(createuser)
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    User.findOne({ email:email })
    .then(u=>{
        if(u){
            if(u.password==password){
                res.json("success")
            }else{
                res.json("unsuccessfull")
            }
        }else{
            res.json("no username found")
        }
       })    
})

router.post("/updateuser/:id", async (req, res) => {
    const updateuser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if (!updateuser) {
        return res.json({ message: "no id found" })
    }
    res.json(updateuser)
})

router.delete("/deleteuser/:id", async (req, res) => {
    const deleteuser = await User.findByIdAndDelete(req.params.id)
    if (!deleteuser) {
        return res.json({ message: "no id found" })
    }
    res.json({message:"deleted"})
})
export default router 

const { Router } = require("express");
const { userModel } = require("../db")

const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const { adminMiddlware } = require("../middleware/admin");

const userRoute = Router();



userRoute.post("/signup", async(req, res)=>{

    const {email, password, firstName, lastName} = req.body;

    await userModel.create({
        email,
        password,
        firstName, 
        lastName
    })
    res.json({
        message : "Signup Scuccessfull"
    })
})

userRoute.post("/signin", async(req, res)=>{
    const {email, password} = req.body;
    const user = await userModel.findOne({
        email,
        password
    })

    if(user){
        const token = jwt.sign({id: user._id},JWT_USER_PASSWORD);
        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            message: "Incorrect Cred."
        })
    }
});

userRoute.post("/purchase", adminMiddlware, async(res, req)=>{
    res.json({
        message : "purchase Endpoint"
    })
});

module.exports = {
    userRoute : userRoute
};
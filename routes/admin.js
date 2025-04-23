const { Router } = require("express");

const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config")

const adminRoute = Router();

const { adminModel, courseModel } = require("../db");
const { adminMiddlware } = require("../middleware/admin");

adminRoute.post("/signup", async(req, res) =>{
    const {email, password, firstName, lastName} = req.body;

    await adminModel.create({
        email,
        password,
        firstName, 
        lastName
    })
    res.json({
        message : "Signup Scuccessfull"
    })
});

adminRoute.post("/signin", async(req, res) =>{
    const {email, password} = req.body;
    const user = await adminModel.findOne({
        email,
        password
    })

    if(user){
        const token = jwt.sign({id: user._id},JWT_ADMIN_PASSWORD);
        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            message: "Incorrect Cred."
        })
    }
});

adminRoute.post("/course", adminMiddlware, async(req, res) =>{
    const adminId = req.adminId;

    const { title, description, price, imageurl } = req.body;

    await courseModel.create({
        title, 
        description, 
        price, 
        imageurl, 
        creatorId: adminId
    })

    res.json({
        message : "admin course endpoint"
    })
});

adminRoute.post("/course/bulk", (req, res) =>{
    res.json({
        message : "admin course bulk endpoint"
    });
});

module.exports = {
    adminRoute
};
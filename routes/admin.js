const { Router } = require("express");

const adminRoute = Router();

adminRoute.post("/signup", (req, res) =>{
    res.json({
        message : "admin signup endpoint"
    })
});

adminRoute.post("/signin", (req, res) =>{
    res.json({
        message : "admin signin endpoint"
    })
});

adminRoute.post("/course", (req, res) =>{
    res.json({
        message : "admin course endpoint"
    })
});

adminRoute.post("/course/bulk", (req, res) =>{
    res.json({
        message : "admin course bulk endpoint"
    })
});

module.exports ={
    adminRoute : adminRoute
};
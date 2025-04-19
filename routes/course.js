const Router = require("express");

const courseRoute = Router();

courseRoute.get("/purchase", (req, res)=>{
    res.json({
        message : "purchases endpoint"
    })
});

courseRoute.get("/preview", (req, res)=>{
    res.json({
        message : "purchases endpoint"
    })
});

module.exports={
    courseRoute : courseRoute
};
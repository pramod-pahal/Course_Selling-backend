const { Router } = require("express");

const userRoute = Router();

userRoute.post("/signup", (res, req)=>{
    res.json({
        message : "signup Endpoint"
    })
});

userRoute.post("/sigin", (res, req)=>{
    res.json({
        message : "sigin Endpoint"
    })
});

userRoute.post("/purchase", (res, req)=>{
    res.json({
        message : "purchase Endpoint"
    })
});

module.exports = {
    userRoute : userRoute
};
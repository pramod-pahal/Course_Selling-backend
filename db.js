const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {type : String, unique: true}, //make new email and avoid pre-existing ones
    password : String,
    firstName : String,
    lastName : String,

});

const adminSchema = new Schema({
    email: {type : String, unique: true}, //make new email and avoid pre-existing ones
    password : String,
    firstName : String,
    lastName : String,
});

const couresSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageurl : String,
    creatorId : ObjectId,
});

const purchaseSchema = new Schema({
    userId : ObjectId,
    courseId: ObjectId

});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", couresSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};
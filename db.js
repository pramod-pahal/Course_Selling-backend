const { Schema, default: mongoose } = require("mongoose");
const course = require("./routes/course");
mongoose.connect("mongodb+srv://botnetmalware12:OHKRvl5RQrTmPj@cluster0.wp11b.mongodb.net/CourseApp");

const userSchema = Schema({
    email: {type : String, unique: true}, //make new email and avoid pre-existing ones
    password : String,
    firstName : String,
    lastName : String,

});

const adminSchema = Schema({
    email: {type : String, unique: true}, //make new email and avoid pre-existing ones
    password : String,
    firstName : String,
    lastName : String,
});

const couresSchema = Schema({
    title : String,
    description : String,
    price : Number,
    imageurl : String,
    creaotrId : ObjectId,
});

const purchaseSchema = Schema({
    userId : ObjectId,
    courseId: ObjectId

});

const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", adminSchema);
const courseModel = mongoose.Model("course", couresSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};
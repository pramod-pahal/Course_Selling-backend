const express = require("express");
const mongoose = require("mongoose");
const { userRoute } = require("./routes/user");
const { adminRoute } = require("./routes/admin");
const { courseRoute } = require("./routes/course");

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/course", courseRoute);


async function checker(){

    await mongoose.connect("mongodb+srv://botnetmalware12:OHKRvl5RQrTmPj@cluster0.wp11b.mongodb.net/CourseApp");
    console.log("Database connected!!!")
    app.listen(3000);
    console.log("Listening on port 3000");
}

checker()
const express = require("express");

const { userRoute } = require("./routes/user");
const { adminRoute } = require("./routes/admin");
const { courseRoute } = require("./routes/course");

const app = express();

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/course", courseRoute);

app.listen(3000);
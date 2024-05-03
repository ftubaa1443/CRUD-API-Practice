const express = require("express");

const app = express();
const mainRoute = require("./routes/index")
app.use(express.json());

app.use("/api/school" , mainRoute)

app.listen(8080);
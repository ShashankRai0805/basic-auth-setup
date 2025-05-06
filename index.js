const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");


app.use(bodyParser.json());
app.use("/user", userRouter);

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
})
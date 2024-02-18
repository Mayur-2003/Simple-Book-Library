const express = require("express");
const app = express();

app.use(express.json());

const booksRoute = require("./routes/booksRoutes");
require("./connections/db");//
const cors = require("cors");

//middleware.
app.use("/api/v1",booksRoute);
app.use(cors());
//server creation
app.listen(3000,()=>{
    console.log("Server running successfully.....");
});

app.get("/api/v1",(req,res)=>{
    res.send("showing response");
})


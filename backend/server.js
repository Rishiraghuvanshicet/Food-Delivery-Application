const express = require("express");
const bodyParser = require("body-parser");
const cors =require("cors");
const app=express();
const connectDB=require("./db/dataBase");
const router=require("./routes/userRoutes")
const Port=5000;
const foodRoute = require('./routes/foodRoute')

//middleware
app.use(express.json());
app.use(cors());

//database
connectDB();

//routes
app.use("/api/user",router)
app.use("/api/admin",foodRoute)

app.listen(Port,()=>console.log(`Server is running On Port ${Port}`));
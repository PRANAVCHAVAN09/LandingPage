require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET","POST","PUT","DELETE","OPTIONS"],
//   allowedHeaders: ["Content-Type"],
//   credentials: true
// }));

// THIS IS THE REAL PREFLIGHT FIX FOR EXPRESS 5
// app.options(/.*/, cors());
app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err));

app.use("/api/signup", require("./src/routes/signupRouter"));

app.listen(process.env.PORT, ()=> console.log("Server running on 5000"));
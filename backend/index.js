const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 8050;

const routes = require("./routes/routes.js");

app.use(cors());
app.use(express.json());

app.use("/", routes); 

mongoose  
  .connect(
    
    "mongodb+srv://dzende725:dinesh1706@cluster0.ze8ajor.mongodb.net/mydatabase", 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  }); 



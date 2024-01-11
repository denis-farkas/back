const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://root:Ptww2XuxQsVPjXaz@cluster0.yib9n.mongodb.net/CleanSweetHome";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const DATABASE_URI = `mongodb+srv://${username}:${password}@booking-app.9v99wj7.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(DATABASE_URI, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("Database Connected Succesfully.");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected.");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Error While connecting with the database.", error.message);
  });
};
export default Connection;

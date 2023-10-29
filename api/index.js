import express, { urlencoded } from "express";
import Connection from "./database/db.js";
import hotelRoute from "./routes/hotelRoute.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import roomRoute from "./routes/roomRoute.js";
import cookieParser from "cookie-parser";

const app = express();

//midddlewares

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/hotels", hotelRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);

//Error
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// establishment of server
const PORT = 8000;
app.listen(PORT, () => {
  //connection to database
  Connection();
  console.log(`Server is running on http://localhost:${PORT}`);
});

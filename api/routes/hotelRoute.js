import express from "express";
import {
  addHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const Route = express.Router();

Route.post("/", verifyAdmin, addHotel);
Route.put("/:id", verifyAdmin, updateHotel);
Route.delete("/:id", verifyAdmin, deleteHotel);
Route.get("/find/:id", getHotel);
Route.get("/", getAllHotel);
Route.get("/countByCity", countByCity);
Route.get("/countByType", countByType);
Route.get("/rooms/:id", getHotelRooms);

export default Route;

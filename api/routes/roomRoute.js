import express from "express";
import {
  addRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRoom,
  updateRoomAvailabilty,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const Route = express.Router();

Route.post("/:hotelid", verifyAdmin, addRoom);
Route.put("/:id", verifyAdmin, updateRoom);
Route.put("/availability/:id", updateRoomAvailabilty);
Route.delete("/:id", verifyAdmin, deleteRoom);
Route.get("/:id", getRoom);
Route.get("/", getAllRoom);

export default Route;

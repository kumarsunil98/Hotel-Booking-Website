import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const Router = express.Router();

// Router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are authenticated.");
// });
// Router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your account.");
// });
// Router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello Admin, you are logged in and you can delete all accounts.");
// });

Router.put("/:id", verifyUser, updateUser);
Router.delete("/:id", verifyUser, deleteUser);
Router.get("/:id", verifyUser, getUser);
Router.get("/", verifyAdmin, getAllUser);

export default Router;

import express from "express";
import { createUser} from "../controllers/userCntrl.js";
import {bookPackage} from "../controllers/userCntrl.js";
import {getAllBookings} from "../controllers/userCntrl.js";
import {cancelBooking} from "../controllers/userCntrl.js";

const router = express.Router();
router.post("/register",  createUser);
router.post("/bookpkg/:id",bookPackage);
router.get("/getbkg",getAllBookings);
router.post("/cancel/:id",cancelBooking)
export {router as userRoute}
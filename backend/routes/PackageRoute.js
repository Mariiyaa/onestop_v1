import express from "express";
import {createPackage} from "../controllers/packageCntrl.js";
import {getAllPackages} from "../controllers/PackageCntrl.js";
import {getPackage} from "../controllers/PackageCntrl.js";

const router = express.Router();
router.post("/create",createPackage)
router.get("/allpkg",getAllPackages)
router.get("/:id",getPackage)
export {router as PackageRoute}
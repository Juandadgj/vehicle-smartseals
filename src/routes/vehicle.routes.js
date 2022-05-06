import { Router } from "express";
import {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  getOwnerVehicles
} from "../controllers/vehicle.controller";

const router = Router();

// Routes
router.get("/vehicle", getVehicles);
router.get("/vehicle/:owner_id", getOwnerVehicles);
router.post("/vehicle", createVehicle);
router.put("/vehicle/:id", updateVehicle);
router.delete("/vehicle/:id", deleteVehicle);

export default router;

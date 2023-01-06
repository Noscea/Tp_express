import express from "express";
import UserController from "../controller/user.controller";
import UserService from "../serivce/user.service";
import UserRepository from "../repository/user.repository";

const repo = new UserRepository();
const serivce = new UserService(repo);
const controller = new UserController(serivce);

const router = express.Router();

// router.get("/", controller.getAll);
// router.get("/:id", controller.getById); 

// router.delete("/:id", controller.deleteById); 

router.post("/", controller.postElement)

// router.put("/:id", controller.put)

// router.patch("/:id", controller.patch)


export default router;
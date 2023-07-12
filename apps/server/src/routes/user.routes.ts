import { Router } from "express";
import UserController from "src/controllers";

const router = Router();

router.get("/users", UserController.getUsers);
router.post("/user", UserController.createUser);
router.delete("/user/:id", UserController.deleteUser);
router.put("/user/:id", UserController.editUser);

export { router };

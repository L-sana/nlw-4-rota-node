import { Router } from "express";
import { SurveysController } from "./src/controllers/SurveysController";
import { UserController } from "./src/controllers/UserController";

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();

router.post("/users", userController.create);
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);

export { router };
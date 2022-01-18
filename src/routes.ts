import { Router } from "express";
import calcController from "./controller/calcController";

const routes = Router();

routes.get("/calculus", calcController.calc);

export default routes;
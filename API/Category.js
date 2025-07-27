import { Router } from "express";
import {createCategory, getCategories} from "../Application/Categories.js";

const categoryRouter = Router();

categoryRouter.route('/').get(getCategories).post(createCategory);


export default categoryRouter;
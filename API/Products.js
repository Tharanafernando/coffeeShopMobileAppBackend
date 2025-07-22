import { Router } from "express";
import {createProduct, getAllProducts} from "../Application/Products.js";

const productRouter = Router();

productRouter.route('/').get(getAllProducts).post(createProduct);


export default productRouter
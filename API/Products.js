import { Router } from "express";

const productRouter = Router();

productRouter.get('/',(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

productRouter.post('/',(req,res)=>{
    console.log("product created successfuly!");
    res.send(req.body);
})

export default productRouter
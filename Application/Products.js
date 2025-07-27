/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
import productSchema from "../DataBase/Schema/ProductSchema.js";
import {createProductDTO} from "../DataBase/DTO/ProductsDTO.js";
import {ZodError} from "zod";

export const getAllProducts = async(req,res)=>{

    const getAllProducts = await productSchema.find();
    console.log(getAllProducts);
    res.status(200).json(getAllProducts);

}

export const createProduct = async (req,res)=>{
    try{
        const createProduct = createProductDTO.safeParse(req.body)
        if (!createProduct.success){
            console.log(createProduct);
            return res.status(400).json(createProduct);
        }
        const product = await productSchema.create(createProduct.data);

        return res.status(200).send(product);
    }catch(err){
        if (err instanceof ZodError){
            return res.status(400).send("Validation failed");
        }else {
            console.log(err);
            return res.status(500).send({
                message:err.message,
            })
        }


    }
}
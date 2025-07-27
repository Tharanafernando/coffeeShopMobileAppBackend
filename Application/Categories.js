import Category from "../DataBase/Schema/Category.js";
import {ZodError} from "zod";
import {createCategoryDTO} from "../DataBase/DTO/CategoryDTO.js";

export const getCategories = async (req,res) => {
    const category = await Category.find();
    console.log(category);
    res.status(200).json(category);
}

export const createCategory = async (req,res) => {
    try{
        console.log(req.body);
        const category = createCategoryDTO.safeParse(req.body);
        if (!category.success) {
            console.log(category.error.format())
            return res.status(401).json("category creation failed")
        }

        const addCategory = await Category.create(category.data);


        res.status(201).json(addCategory);

    }catch (err){
        if (err instanceof ZodError){
            return res.status(400).send("Validation Failed");
        }else{
            return res.status(500).send(err.message);
        }


    }

}
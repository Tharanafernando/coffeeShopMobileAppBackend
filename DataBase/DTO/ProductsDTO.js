import {z} from "zod";

export const createProductDTO = z.object({
    categoryId: z.string(),
    name: z.string(),
    image: z.string(),
    price: z.number().positive("price must be a positive"),

})
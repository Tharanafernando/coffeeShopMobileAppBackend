import {z} from "zod";

export const createProductDTO = z.object({
    id:z.string(),
    categoryId: z.string(),
    name: z.string(),
    image: z.string().url("image must be a valid url"),
    price: z.number().positive("price must be a positive"),

})
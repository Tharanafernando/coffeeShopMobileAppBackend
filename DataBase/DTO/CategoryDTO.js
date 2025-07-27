import {z} from "zod";

export const createCategoryDTO = z.object({
    categoryName:z.string()
})
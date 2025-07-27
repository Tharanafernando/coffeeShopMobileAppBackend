import productRouter from "./API/Products.js";
import express from 'express'
import {databaseConnection} from "./DataBase/dbConnection.js";
import dotenv from "dotenv";
import categoryRouter from "./API/Category.js";
dotenv.config();

const app = express();

const port = 8000;
app.use(express.json());
app.use('/api/products',productRouter)
app.use('/api/category',categoryRouter)
await databaseConnection()

app.listen(port, () => {
  
  console.log(`Server is listening on port ${port}`);
});
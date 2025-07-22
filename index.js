import productRouter from "./API/Products.js";
import express from 'express'
import {databaseConnection} from "./DataBase/dbConnection.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = 8000;
app.use(express.json());
app.use('/api/products',productRouter)
await databaseConnection()

app.listen(port, () => {
  
  console.log(`Server is listening on port ${port}`);
});
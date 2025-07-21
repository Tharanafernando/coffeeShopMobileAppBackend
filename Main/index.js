import productRouter from "../API/Products.js";
import express from 'express'

const app = express();

const port = 8000;

app.use('/api/products',productRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
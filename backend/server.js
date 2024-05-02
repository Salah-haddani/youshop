import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


const port = process.env.PORT || 5000;
connectDB(); // connect to MongoDB
const app = express();

app.get('/', (req, res) => {
    res.send('API is running ...');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
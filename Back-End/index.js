import express from "express";
import dotenv from 'dotenv';
import db from './models/index.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
dotenv.config();
import ProductRoutes from "./Routes/ProductRoutes.js"
import AuthRoutes from "./Routes/AuthRoutes.js"
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/product', ProductRoutes)
app.use('/auth', AuthRoutes)
app.listen(port, async () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})
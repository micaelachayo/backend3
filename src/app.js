import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import {router as mocksRouter} from "./routes/mocks.routes.js";
import { connectMongoDB } from './config/mongoDb.config.js';


const app=express();

const production= process.env.NODE_ENV==="produccion"
app.use(
    cors({
      origin: production ? "http://localhost:3030" : "http://localhost:8080",
      credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use("/api/mocks", mocksRouter);

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server escuchando en puerto ${process.env.PORT}`);
});

connectMongoDB()
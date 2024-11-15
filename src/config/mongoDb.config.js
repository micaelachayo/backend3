import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.development"
  });
//creamos funcion para que haga conección con la BD
export const connectMongoDB= async()=>{ 
try {
mongoose.connect (process.env.MONGO_URL, {dbName: process.env.DB_NAME});
console.log('Mongo DB conectado');
} catch (error) {
console.log(error);
res.status(500).json({ status: 'error', msg: 'error interno del sevidor' });
}
}
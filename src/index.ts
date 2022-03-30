import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import route from './routes';
import connect from './config/database';

dotenv.config();

const app = express();

// middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extends:true
}));

// db
connect();
//routes
route(app);

// start sever listening

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Express is listening on port ${port}`)
})
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/index.js';

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use('/posts', routes);
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

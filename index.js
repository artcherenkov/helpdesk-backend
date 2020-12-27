import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/index.js';
import organizations from './routes/organization.js';
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({ limit: `30mb`, extended: true }));
app.use(bodyParser.urlencoded({ limit: `30mb`, extended: true }));

app.use(`/issues`, routes);
app.use(`/organizations`, organizations);
app.use(express.static(`public`));

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set(`useFindAndModify`, false);

import express from 'express';
import cors from 'cors';
import dns from 'dns';
import dotenv from 'dotenv';
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import routes from './routes/index.js';
import db from './config/index.js';
dns.setServers(['8.8.8.8', '1.1.1.1']);
const PORT = process.env.PORT || 5000;


dotenv.config();
db.connectDB();
const app = express();

app.use(cors());

app.use(express.json());

routes(app);

app.use(helmet());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
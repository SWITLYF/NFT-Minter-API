
import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import connect from './utils/connect'; 
import logger from './utils/logger';
require('dotenv').config();

const app: Application = express();
const PORT = process.env.port || 3333;

connect();

// const corsOptions = {
//     origin: "https://dc-backend-client.vercel.app"
// };

const corsOptions = {
  origin: [
    "https://proj.com.ng", 
    "https://www.proj.com.ng"
  ]
};
  
app.use(cors(corsOptions));

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

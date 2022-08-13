import express, { Express } from 'express';
import dotenv from 'dotenv';
import http from 'http'
import https from 'http'
import doctors from './src/routers/doctors.router'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
const environment =  process.env.ENVIRONMENT || 'DEVELOP';

app.use('/doctors', doctors);

if(environment === 'PRODUCTION') {
  https.createServer(app).listen(port);
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
} else {
  http.createServer(app).listen(port);
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
}



import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME || 'CI-CD-Jenkins-Pipeline'} version ${process.env.APP_VERSION || '1.0.0'}`);
});
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});
app.get('/env', (req, res) => {
  res.json({
    appName: process.env.APP_NAME,
    appUrl: process.env.APP_URL,
    appVersion: process.env.APP_VERSION,
  });
});
app.listen(port, () => {
  console.log(`${process.env.APP_NAME || 'CI-CD-Jenkins-Pipeline'} is running at ${process.env.APP_URL || 'http://localhost:3000'}`);
  return true;
});
import express from 'express';
import routes from './routes/image-route';

const app = express();
const port = 3000;

app.use('/', routes);

// to listen to my server:
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
  console.log('******************************************');
});

export default app;

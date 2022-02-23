import express, { Request, Response } from 'express';
import fs, { ReadStream } from 'fs';
import { resizeImage, viewImage } from '../utilities/image-utils';

const routes = express.Router();

// this function is to call my end point:
routes.get('/api/images', async (req: Request, res: Response) => {
  const imageName: string = req.query.image as string;
  const imageWidth: number = parseInt(req.query.width as string, 10);
  const imageHeight: number = parseInt(req.query.height as string, 10);

  if (Number.isNaN(imageWidth) || Number.isNaN(imageHeight)) {
    res.send('Please enter valid width and height values');
  } else {
    try {
      const resizedImagePath = `./images-resized/${imageName}-${imageWidth}-${imageHeight}.jpg`;
      // check if resized image already exists
      if (!fs.existsSync(resizedImagePath)) {
        await resizeImage(imageName, imageWidth, imageHeight);
      }
      const stream: ReadStream = viewImage(imageName, imageWidth, imageHeight);
      stream.pipe(res);
    } catch (error) {
      res.send('This image not exists');
      console.log(error);
    }
  }
});

export default routes;

import sharp from 'sharp';
import fs from 'fs';

// this function is to resize image , then save it to image-resized folder:
export const resizeImage = async (
  imageName: string,
  imageWidth: number,
  imageHeight: number,
): Promise<void> => {
  const imagePath: string = `./images/${imageName}.jpg`;
  const resizedIamgePath: string = `./images-resized/${imageName}-${imageWidth}-${imageHeight}.jpg`;

  await sharp(imagePath)
    .resize({
      width: imageWidth,
      height: imageHeight,
    })
    .toFile(resizedIamgePath);
};

// this function is to display image on browser:
export const viewImage = (imageName: string, imageWidth: number, imageHeight: number): fs.ReadStream => fs.createReadStream(`./images-resized/${imageName}-${imageWidth}-${imageHeight}.jpg`);

import fs from 'fs';
import sharp from 'sharp';

// to test width and height are numbers
const testWidthHeight = (imageWidth: number, imageHeight: number): boolean => {
    if (Number.isNaN(imageWidth) || Number.isNaN(imageHeight)) {
        return false;
    }
    return true;
};

// to test that image exists in fs
const testImageExists = (resizedImagePath: string, imageWidth: number, imageHeight: number): boolean => {
    if (fs.existsSync(`./images-resized/${resizedImagePath}-${imageWidth}-${imageHeight}.jpg`)) {
        return true;
    }
    return false;
};


export = {
    testWidthHeight,
    testImageExists,
}

import testUtils from '../utilities/test-utils';
import { resizeImage } from '../utilities/image-utils';
import fs from 'fs';

it('check if valid width and height are passed correctlt', () => {
    expect(testUtils.testWidthHeight(100, 200)).toBeTruthy();
});

it('check if file exists', () => {
    expect(testUtils.testImageExists('fjord', 100, 200)).toBeTruthy();
});


it('test if image resize succeed', () => {

    const imageName: string = 'fjord';
    const imagePath: string = `./images/${imageName}.jpg`;
    const resizedIamgePath: string = `./images-resized/${imageName}-100-200.jpg`;

    let succeed: boolean = false;

    try {
        if (fs.existsSync(imagePath)) {
            resizeImage(imageName, 100, 200);
            if (fs.existsSync(resizedIamgePath)) {
                succeed = true;
            }
        }

    }
    catch (error) {
        succeed = false;
    }

    expect(succeed).toBeTruthy();
});
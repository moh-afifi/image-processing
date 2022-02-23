"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = __importDefault(require("../utilities/test-utils"));
const image_utils_1 = require("../utilities/image-utils");
const fs_1 = __importDefault(require("fs"));
it('check if valid width and height are passed correctlt', () => {
    expect(test_utils_1.default.testWidthHeight(100, 200)).toBeTruthy();
});
it('check if file exists', () => {
    expect(test_utils_1.default.testImageExists('fjord', 100, 200)).toBeTruthy();
});
it('test if image resize succeed', () => {
    const imageName = 'fjord';
    const imagePath = `./images/${imageName}.jpg`;
    const resizedIamgePath = `./images-resized/${imageName}-100-200.jpg`;
    let succeed = false;
    try {
        if (fs_1.default.existsSync(imagePath)) {
            (0, image_utils_1.resizeImage)(imageName, 100, 200);
            if (fs_1.default.existsSync(resizedIamgePath)) {
                succeed = true;
            }
        }
    }
    catch (error) {
        succeed = false;
    }
    expect(succeed).toBeTruthy();
});

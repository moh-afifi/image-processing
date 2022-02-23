"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
// to test width and height are numbers
const testWidthHeight = (imageWidth, imageHeight) => {
    if (Number.isNaN(imageWidth) || Number.isNaN(imageHeight)) {
        return false;
    }
    return true;
};
// to test that image exists in fs
const testImageExists = (resizedImagePath, imageWidth, imageHeight) => {
    if (fs_1.default.existsSync(`./images-resized/${resizedImagePath}-${imageWidth}-${imageHeight}.jpg`)) {
        return true;
    }
    return false;
};
module.exports = {
    testWidthHeight,
    testImageExists,
};

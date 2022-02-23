"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const image_utils_1 = require("../utilities/image-utils");
const routes = express_1.default.Router();
// this function is to call my end point:
routes.get('/api/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageName = req.query.image;
    const imageWidth = parseInt(req.query.width, 10);
    const imageHeight = parseInt(req.query.height, 10);
    if (Number.isNaN(imageWidth) || Number.isNaN(imageHeight)) {
        res.send('Please enter valid width and height values');
    }
    else {
        try {
            const resizedImagePath = `./images-resized/${imageName}-${imageWidth}-${imageHeight}.jpg`;
            // check if resized image already exists
            if (!fs_1.default.existsSync(resizedImagePath)) {
                yield (0, image_utils_1.resizeImage)(imageName, imageWidth, imageHeight);
            }
            const stream = (0, image_utils_1.viewImage)(imageName, imageWidth, imageHeight);
            stream.pipe(res);
        }
        catch (error) {
            res.send('This image not exists');
            console.log(error);
        }
    }
}));
exports.default = routes;

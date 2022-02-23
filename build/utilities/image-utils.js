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
exports.viewImage = exports.resizeImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
// this function is to resize image , then save it to image-resized folder:
const resizeImage = (imageName, imageWidth, imageHeight) => __awaiter(void 0, void 0, void 0, function* () {
    const imagePath = `./images/${imageName}.jpg`;
    const resizedIamgePath = `./images-resized/${imageName}-${imageWidth}-${imageHeight}.jpg`;
    yield (0, sharp_1.default)(imagePath)
        .resize({
        width: imageWidth,
        height: imageHeight,
    })
        .toFile(resizedIamgePath);
});
exports.resizeImage = resizeImage;
// this function is to display image on browser:
const viewImage = (imageName, imageWidth, imageHeight) => fs_1.default.createReadStream(`./images-resized/${imageName}-${imageWidth}-${imageHeight}.jpg`);
exports.viewImage = viewImage;

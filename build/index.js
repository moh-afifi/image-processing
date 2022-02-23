"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_route_1 = __importDefault(require("./routes/image-route"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/', image_route_1.default);
// to listen to my server:
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
    console.log('******************************************');
});
exports.default = app;

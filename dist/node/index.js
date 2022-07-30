"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const api_1 = __importDefault(require("./server/api"));
const app = (0, express_1.default)();
const port = process.env.PORT;
const rootDir = path_1.default.resolve(__dirname, '../../dist');
if (process.env.CORS == "true") {
    console.log("cors on");
    app.use((0, cors_1.default)());
}
app.use('/', express_1.default.static(path_1.default.join(rootDir, 'vite')));
app.use('/api', api_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

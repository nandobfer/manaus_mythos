"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const io_1 = require("./io");
const server = http_1.default.createServer();
(0, io_1.initializeIoServer)(server);
const io = (0, io_1.getIoInstance)();
io.on("connection", (socket) => {
    (0, io_1.handleSocket)(socket);
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

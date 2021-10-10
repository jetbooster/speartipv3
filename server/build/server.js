"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = require("path");
var app = (0, express_1.default)();
var clientDir = (0, path_1.resolve)(__dirname, '../../client/build');
console.log(clientDir);
app.use('/', express_1.default.static(clientDir));
app.get('/api/*', function (req, res) {
    console.log(req.path);
    res.json({ test: true });
});
app.get('*', function (req, res) {
    res.sendFile((0, path_1.join)(clientDir, 'index.html'));
});
var port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log("Server listening on " + port + "...");
});

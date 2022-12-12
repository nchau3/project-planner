"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors = require("cors");
//routes
const users_1 = __importDefault(require("./routes/users"));
const projects_1 = __importDefault(require("./routes/projects"));
const tasks_1 = __importDefault(require("./routes/tasks"));
app.use('/users', users_1.default);
app.use('/projects', projects_1.default);
app.use('/tasks', tasks_1.default);
//middleware
app.use(cors());
app.use(express_1.default.json());
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(5000, () => {
    console.log("listening on port 5000...");
});

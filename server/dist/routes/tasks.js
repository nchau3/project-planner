"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const tasks_1 = require("../controllers/tasks");
router.get('/', (req, res, next) => {
    (0, tasks_1.getAllTasks)(req, res, next);
});
exports.default = router;

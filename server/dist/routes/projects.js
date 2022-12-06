"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const projects_1 = require("../controllers/projects");
router.get('/', (req, res, next) => {
    (0, projects_1.getProjects)(req, res, next);
});
exports.default = router;

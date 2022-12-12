"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const comments_1 = require("../controllers/comments");
router.get('/', (req, res, next) => {
    (0, comments_1.getAllComments)(req, res, next);
});
exports.default = router;

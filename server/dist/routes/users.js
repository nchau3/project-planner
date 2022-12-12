"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users_1 = require("../controllers/users");
router.get('/', (req, res, next) => {
    (0, users_1.getAllUsers)(req, res, next);
});
exports.default = router;

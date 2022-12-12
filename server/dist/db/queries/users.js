"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const connection_1 = __importDefault(require("../connection"));
const getAllUsers = () => {
    return connection_1.default.query('SELECT * FROM users;')
        .then((data) => {
        return data.rows;
    });
};
exports.getAllUsers = getAllUsers;

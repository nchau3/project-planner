"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjects = void 0;
const connection_1 = __importDefault(require("../connection"));
const getAllProjects = () => {
    return connection_1.default.query('SELECT * FROM projects;')
        .then((data) => {
        return data.rows;
    });
};
exports.getAllProjects = getAllProjects;

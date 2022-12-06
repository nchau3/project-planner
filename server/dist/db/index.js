"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const getProjects = () => {
    return connection_1.default.query('SELECT * FROM projects;')
        .then(data => {
        return data.rows;
    });
};
module.exports = { getProjects };

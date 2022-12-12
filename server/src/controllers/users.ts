import { RequestHandler } from "express";
import { User } from "../models/user";

const userQueries = require('../db/queries/users');

export const getAllUsers: RequestHandler = (req, res, next) => {
  userQueries.getAllUsers()
    .then((projects: User[]) => {
      res.json({ projects });
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message });
    });
};

module.exports = { getAllUsers };
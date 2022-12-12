import { RequestHandler } from "express";
import { User } from "../models/user";

const userQueries = require('../db/queries/users');

export const getAllUsers: RequestHandler = (req, res, next) => {
  userQueries.getAllUsers()
    .then((users: User[]) => {
      res.json({ users });
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message });
    });
};

module.exports = { getAllUsers };
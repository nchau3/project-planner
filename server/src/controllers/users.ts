import { RequestHandler } from "express";
import { User } from "../models/user";

import * as userQueries from '../db/queries/users.js';

const getAllUsers: RequestHandler = (req, res, next) => {
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

export { getAllUsers };
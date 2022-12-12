import { RequestHandler } from "express";
import { Comment } from "../models/comment";

const commentQueries = require('../db/queries/comments');

export const getAllComments: RequestHandler = (req, res, next) => {
  commentQueries.getAllComments()
    .then((projects: Comment[]) => {
      res.json({ projects });
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message });
    });
};

module.exports = { getAllComments };
import { RequestHandler } from "express";
import { Comment } from "../models/comment";

import * as commentQueries from '../db/queries/comments.js';

const getAllComments: RequestHandler = (req, res, next) => {
  commentQueries.getAllComments()
    .then((comments: Comment[]) => {
      res.json({ comments });
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message });
    });
};

export { getAllComments };
import express, { Request, Response, NextFunction } from 'express';
const app = express();
const cors = require("cors");

//routes
import projectRoutes from './routes/projects';

app.use('/projects', projectRoutes);

//middleware
app.use(cors());
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction ) => {
  res.status(500).json({message: err.message});
});

app.listen(5000, () => {
  console.log("listening on port 5000...")
});


import db from '../connection';
import { Project } from '../../models/project';

const getAllProjects = () => {
  return db.query('SELECT * FROM projects;')
    .then((data: {rows: Project[]}) => {
      return data.rows;
    })
}

module.exports = { getAllProjects };
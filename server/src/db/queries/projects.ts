import db from '../connection.js';
import { QueryResult } from 'pg';
import { Project } from '../../models/project.js';

const getAllProjects = () => {
  return db.query(`
    SELECT 
      projects.*,
      first_name,
      last_name,
      COUNT(tasks.*) as tasks_total,
      (SELECT COUNT(*) FROM tasks WHERE status != 'pending' AND status != 'in progress') as tasks_completed
    FROM projects
    JOIN users ON owner_id = users.id
    JOIN tasks ON projects.id = tasks.project_id
    GROUP BY projects.id, first_name, last_name
    ;`)
    .then((data: QueryResult) => {
      return data.rows;
    })
};

const createProject = (project: Project) => {
  const { owner_id, title, description, date_due } = project

  return db.query(`
    INSERT INTO projects (owner_id, title, description, date_due)
    VALUES ($1, $2, $3, $4)
  ;`, [owner_id, title, description, date_due])
  .then((data: QueryResult) => {
    return data.rows;
  })
}

export { getAllProjects, createProject };
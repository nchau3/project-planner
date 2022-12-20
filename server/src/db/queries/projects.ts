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
    LEFT JOIN tasks ON projects.id = tasks.project_id
    GROUP BY projects.id, first_name, last_name
    ORDER BY projects.date_created DESC
    ;`)
    .then((data: QueryResult) => {
      return data.rows;
    })
};

const createProject = (project: Project) => {
  const { owner_id, title, description } = project

  return db.query(`
    INSERT INTO projects (owner_id, title, description)
    VALUES ($1, $2, $3)
  ;`, [owner_id, title, description])
  .then((data: QueryResult) => {
    return data.rows;
  })
  .catch(err => {
    console.log(err);
  })
}

export { getAllProjects, createProject };
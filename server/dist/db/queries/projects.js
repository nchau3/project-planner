import db from '../connection';
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
        .then((data) => {
        return data.rows;
    });
};
export { getAllProjects };

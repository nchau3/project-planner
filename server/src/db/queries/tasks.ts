import db from '../connection.js';

const getAllTasks = () => {
  return db.query('SELECT * FROM tasks;')
    .then((data: any) => {
      return data.rows;
    })
}

const getProjectTasks = (project_id: string) => {
  return db.query('SELECT * FROM tasks WHERE project_id = $1;', [project_id])
    .then((data: any) => {
      return data.rows;
    })
}

const changeTaskStatus = (task_id: string, status: string) => {
  return db.query('UPDATE tasks SET status = $1 WHERE id = $2;', [status, task_id])
    .then((data: any) => {
      console.log(data);
      return data.rows;
    })
}

export { getAllTasks, getProjectTasks, changeTaskStatus };
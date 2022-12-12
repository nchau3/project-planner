import db from '../connection';

const getAllTasks = () => {
  return db.query('SELECT * FROM tasks;')
    .then((data: any) => {
      return data.rows;
    })
}

module.exports = { getAllTasks };
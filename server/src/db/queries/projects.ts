import db from '../connection';

const getAllProjects = () => {
  return db.query('SELECT * FROM projects;')
    .then((data: any) => {
      return data.rows;
    })
}

module.exports = { getAllProjects };
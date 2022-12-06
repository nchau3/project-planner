const db = require('../connection');

const getProjects = () => {
  return db.query('SELECT * FROM projects;')
    .then((data: any) => {
      return data.rows;
    })
}

module.exports = { getProjects };
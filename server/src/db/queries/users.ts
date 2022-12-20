import db from '../connection.js';

const getAllUsers = () => {
  return db.query('SELECT * FROM users;')
    .then((data: any) => {
      return data.rows;
    })
}

export { getAllUsers };
import db from '../connection';

const getAllUsers = () => {
  return db.query('SELECT * FROM users;')
    .then((data: any) => {
      return data.rows;
    })
}

export { getAllUsers };
import db from '../connection';

const getAllComments = () => {
  return db.query('SELECT * FROM comments;')
    .then((data: any) => {
      return data.rows;
    })
}

export { getAllComments };
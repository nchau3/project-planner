DROP TABLE IF EXISTS projects CASCADE;
CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(15) NOT NULL,
  description TEXT,
  date_created TIMESTAMP,
  date_due TIMESTAMP
);
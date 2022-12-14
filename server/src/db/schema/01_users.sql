DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  email VARCHAR(255),
  password VARCHAR(255),
  profile_pic VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT now()
);
CREATE TYPE status AS ENUM ('pending', 'in progress', 'complete');

DROP TABLE IF EXISTS tasks CASCADE;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title VARCHAR(15) NOT NULL,
  description TEXT,
  priority INTEGER,
  current_status status NOT NULL DEFAULT 'pending',
  date_created TIMESTAMP NOT NULL DEFAULT now(),
  date_started TIMESTAMP,
  date_due TIMESTAMP
);
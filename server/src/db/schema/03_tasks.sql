DROP TABLE IF EXISTS tasks CASCADE;
DROP TYPE IF EXISTS status CASCADE;

CREATE TYPE status_type AS ENUM ('pending', 'in progress', 'complete');

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title VARCHAR(50) NOT NULL,
  description TEXT,
  priority INTEGER,
  status status_type NOT NULL DEFAULT 'pending',
  date_created TIMESTAMP NOT NULL DEFAULT now(),
  date_started TIMESTAMP,
  date_due TIMESTAMP
);
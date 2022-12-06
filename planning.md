### Project Planner

-React
-Node (Typescript)
-Express (Typescript)
-PostgreSQL

-Recoil
-Auth0

Start with personal project planner, expand to team functionality (monday, Jira, trello)

## User Stories

- User Auth (Login/Register)

- Dashboard
  -tasks assigned
  -tasks in progress
  -messages (stretch)

- Create a new project
  -include default categories
  -create custom categories
  -timeline to see all tasks in order to be completed
  -analytics (progress)
    -percent overall completed
    -time/story points used per category

- Create/Modify boards within project
  -change task status (drag/drop?)

- Create/Modify tasks for boards
  -assign category
  -add comments

- Misc. Features
  -mobile support/responsive design
  -adjust color scheme (dark mode)
  -user settings
    -notifications (text, email)
    -change profile pic
  -general analytics/report generating

# Team features (stretch)
- message other users
- assign members to tasks

- Search
  -return results for
    -users
    -tasks
    -comments

## ERD (models)

- User
  - first_name
  - last_name
  - email
  - password
  - profile_pic

- Project
  - owner_id FK
  - title
  - description
  - create date
  - due date
  - last adjusted date

- Categories
  - name

- Task
  - project_id FK
  - category_id FK
  - title
  - description
  - priority (0-5)
  - date_created
  - date_started
  - date_completed
  - due date
  - status ( pending, in progess, complete )

- Comments
  -task_id FK
  -user_id FK
  -content (text)
  -date posted

- task_user (bridge)
    -task_id FK
    -user_id FK
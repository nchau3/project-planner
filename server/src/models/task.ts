export interface Task {
  id: number,
  owner_id: number,
  project_id: number,
  title: string,
  description: string,
  priority: number,
  current_status: 'pending' | 'in progress' | 'complete',
  date_created: Date,
  date_started: Date,
  date_due: Date
}
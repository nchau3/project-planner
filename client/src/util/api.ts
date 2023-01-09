import axios from "axios";

export async function getProjects() {
  const response = await axios.get('/api/projects');
  return response.data;
}

export async function getProject(project_id: string) {
  const response = await axios.get(`/api/projects/${project_id}`);
  return response.data;
}

export async function createProject(project: any) {
  const response = await axios.post('/api/projects/new', {project});
  return response;
}

export async function changeTaskStatus(task_id: string, status: string) {
  const response = await axios.patch(`/api/tasks/${task_id}`, { status });
  return response;
}
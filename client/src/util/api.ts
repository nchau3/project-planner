import axios from "axios";

export async function getProjects() {
  const response = await axios.get('/api/projects');
  return response.data.projects;
}

export async function getProject(project_id: string) {
  const response = await axios.get(`/api/projects/${project_id}`);
  return response.data;
}

export async function createProject(project: any) {
  const response = await axios.post('/api/projects/new', {project});
  return response;
}
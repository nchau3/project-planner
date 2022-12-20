import axios from "axios";

export async function getProjects() {
  const response = await axios.get('/api/projects');
  return response.data.projects;
}

export async function createProject(project: any) {
  console.log('axios post...');
  const response = await axios.post('/api/projects/new', {project});
  console.log(response);
  return response;
}
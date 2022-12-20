import { Form } from "react-router-dom";
import { createProject } from "../../../util/api";

export async function action({request}: any) {
  const formData = await request.formData();
  const project = Object.fromEntries(formData);
  try {
    const newProject = await createProject(project);
    return { newProject };
  } catch (err) {
    throw err;
  }
}

export default function NewProject() {
  return (
    <>
      <h1>New Project</h1>
      <Form method="post">
        <input type="text" name="title" placeholder="title" />
        <input type="number" name="owner_id" placeholder="owner_id"/>
        <input type="text" name="description" placeholder="description"/>
        <button type="submit">SUBMIT</button>
      </Form>
    </>

  )
}
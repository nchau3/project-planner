import { Project } from "./models/project";
import { Task } from "./models/task";

interface ProjectWithTasks extends Project {
  tasks: Task[];
}

//date formatting
function convertDates(input: Project | Task | Project[] | Task[] | ProjectWithTasks) {

  function convert(timestamp: string) {
    return new Date(timestamp).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "medium"
    });
  }

  if (!Array.isArray(input)) {
    return {
      ...input,
      date_created: convert(input.date_created),
      date_due: convert(input.date_due),
      date_started: convert(input.date_started),
    }
  } else {
    return input.map(item => {
      return {
        ...item,
        date_created: convert(item.date_created),
        date_due: convert(item.date_due),
        date_started: convert(item.date_started)
      }
    })
  }
}

export function convertProjectDates(input: ProjectWithTasks | Project[]) {
  if (!Array.isArray(input)) {
    const output = convertDates({...input});
    return {
      ...output,
      tasks: convertDates(input.tasks)
    }
  } else {
    return convertDates(input);
  }
}
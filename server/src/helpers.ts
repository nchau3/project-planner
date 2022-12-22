import { Project } from "./models/project";

//date formatting
function convertDate(timestamp: string) {
  return new Date(timestamp).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium"
  });
}

//compatible with single project or array
export function convertProjectDates(input: Project | Project[]) {
  if (!Array.isArray(input)) {
    return {
      ...input,
      date_created: convertDate(input.date_created),
      date_due: convertDate(input.date_due)
    };
  } else {
    return input.map(project => {
      return {
        ...project,
        date_created: convertDate(project.date_created),
        date_due: convertDate(project.date_due)
      };
    });
  }
}
//date formatting
function convertDate(timestamp) {
    return new Date(timestamp).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "medium"
    });
}
//compatible with single project or array
export function convertProjectDates(input) {
    if (!Array.isArray(input)) {
        return Object.assign(Object.assign({}, input), { date_created: convertDate(input.date_created), date_due: convertDate(input.date_due) });
    }
    else {
        return input.map(project => {
            return Object.assign(Object.assign({}, project), { date_created: convertDate(project.date_created), date_due: convertDate(project.date_due) });
        });
    }
}

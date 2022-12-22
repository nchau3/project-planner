//date formatting
function convertDates(input) {
    function convert(timestamp) {
        return new Date(timestamp).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "medium"
        });
    }
    if (!Array.isArray(input)) {
        return Object.assign(Object.assign({}, input), { date_created: convert(input.date_created), date_due: convert(input.date_due), date_started: convert(input.date_started) });
    }
    else {
        return input.map(item => {
            return Object.assign(Object.assign({}, item), { date_created: convert(item.date_created), date_due: convert(item.date_due), date_started: convert(item.date_started) });
        });
    }
}
export function convertProjectDates(input) {
    if (!Array.isArray(input)) {
        const output = convertDates(Object.assign({}, input));
        return Object.assign(Object.assign({}, output), { tasks: convertDates(input.tasks) });
    }
    else {
        return convertDates(input);
    }
}

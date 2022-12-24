import TaskListItem, { taskListItemProps } from "./TaskListItem";
import "../../../../styles/component-styles/tasks.scss";

export default function TaskList(props: {tasks: taskListItemProps[]}) {
  const taskList = props.tasks.map(task => {
    return (
      <TaskListItem
      key={task.id}
      id={task.id}
      title={task.title}
      description={task.description}
      priority={task.priority}
      status={task.status}
      date_created={task.date_created}
      date_due={task.date_due}
      date_started={task.date_started} />
    )
  })

  return (
    <ul className="task-list">
      <h3>Ongoing tasks</h3>
      {taskList}
    </ul>
  )
}
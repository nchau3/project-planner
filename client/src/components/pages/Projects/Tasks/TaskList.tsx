import TaskListItem, { taskListItemProps } from "./TaskListItem";

export default function TaskList(props: {tasks: taskListItemProps[]}) {
  const taskList = props.tasks.map(task => {
    return (
      <TaskListItem
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
      {taskList}
    </ul>
  )
}
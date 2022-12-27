import TaskListItem, { taskListItemProps } from "./TaskListItem";
import "../../../../styles/component-styles/tasks.scss";

export default function TaskList(props: {tasks: taskListItemProps[]}) {
  const ongoingTasks = props.tasks.filter(task => task.status !== "completed");
  const completedTasks = props.tasks.filter(task => task.status === "completed");

  const ongoingTaskList = ongoingTasks.map(task => {
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

  const completedTaskList = completedTasks.map(task => {
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
      <h3>Ongoing Tasks</h3>
      {ongoingTaskList}
      <h3>Completed Tasks</h3>
      {completedTaskList}
    </ul>
  )
}
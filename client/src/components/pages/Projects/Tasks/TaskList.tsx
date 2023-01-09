import TaskListItem, { taskListItemProps } from "./TaskListItem";
import "../../../../styles/component-styles/tasks.scss";
import { changeTaskStatus } from "../../../../util/api";

export default function TaskList(props: {tasks: taskListItemProps[]}) {
  function submitHandler(task_id: string, status: string) {
    if (status) {
      changeTaskStatus(task_id, status);
    }
  }

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
      date_started={task.date_started}
      onSubmit={submitHandler}
      />
    )
  })

  return (
    <ul className="task-list">
      {taskList}
    </ul>
  )
}
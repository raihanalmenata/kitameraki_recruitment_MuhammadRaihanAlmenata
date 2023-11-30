/* eslint-disable react/prop-types */
import { TasksProvider } from '../../stores/tasks'

import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

import './style.css'

const MyTaskPage = () => {

return (
  <TasksProvider>
    <div className="page-con">
      <TaskList/>
      <TaskForm/>
    </div>
  </TasksProvider>
)

}

export default MyTaskPage
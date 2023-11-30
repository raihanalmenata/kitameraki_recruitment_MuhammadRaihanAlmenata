import { useEffect, useReducer } from 'react'

import TaskCard from '../TaskCard'

import taskAPI from '../../../../adapters/task'

import { useTasksDispatch, useTasks } from '../../../../stores/tasks'
import { editableTasksReducer } from '../../../../stores/editableTasks'

const TaskList = () => {
    
    const [editableTasks, editableTasksDispatch] = useReducer(editableTasksReducer, [])

    const tasks = useTasks()
    const tasksDispatch = useTasksDispatch()

    useEffect(
      () => async () => {
        const response = await taskAPI.get({ current: 0, size: 8 })
        for (const task of response.data)
          tasksDispatch({
            type: 'added',
            data: task
          })
      },
      []
    )
    
      const handleScroll = async (e) => {
    
        const element = e.target
        const isScrolledToBottom = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1
    
        if (isScrolledToBottom) {
          const totCurTask = tasks.length
          const response = await taskAPI.get({ current: totCurTask, size: 5 })
          for (const task of response.data)
            tasksDispatch({
              type: 'added',
              data: task
            })
        }
    
    }

    return (
        <div className="list-con" onScroll={handleScroll}>
            <ul className="task-list">
                {
                    tasks.map(
                        (task) =>  (
                            <TaskCard
                                key={task.id}
                                task={task}
                                editableTasksDispatch={editableTasksDispatch}
                                editMode={ editableTasks.includes(task.id) }
                            />
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default TaskList
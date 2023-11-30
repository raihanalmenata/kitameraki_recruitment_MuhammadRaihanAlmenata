import { useReducer, createContext, useContext } from 'react'
import tasksReducer from './reducer'

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

const TasksProvider = ({ children }) => {
    const [tasks, tasksDispatch] = useReducer(tasksReducer, [])

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={tasksDispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

const useTasks = () => useContext(TasksContext)
const useTasksDispatch = () => useContext(TasksDispatchContext)

export { TasksProvider, useTasks, useTasksDispatch }
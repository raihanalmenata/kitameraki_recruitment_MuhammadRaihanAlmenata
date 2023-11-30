import EditableCard from '../../../../components/EditableCard'

import taskAPI from '../../../../adapters/task'

import { useTasks, useTasksDispatch } from '../../../../stores/tasks'

const TaskCard = ({ task, editMode, editableTasksDispatch }) => {

    const tasks = useTasks()
    const tasksDispatch = useTasksDispatch()

    const deleteHandler = async (cardData) => {

        const response = await taskAPI.deleteById(cardData.id)
        if (response.status == 204)
          tasksDispatch({
            type: 'deleted',
            id: cardData.id
          })
    
      }
    
      const saveHandler = async (cardData) => {

        const response = await taskAPI.updateById(cardData)
        if (response.code == 200){
            tasksDispatch({
              type: 'edited',
              data: cardData
            })
            editableTasksDispatch({ type : 'removed', id : cardData.id })
        }
    
      }

      const editHandler = async (cardData) => editableTasksDispatch({ type : 'added', id : cardData.id})

    return (
        <EditableCard
            id={task.id} 
            title={task.title}
            description={task.description}
            onDelete={deleteHandler}
            onSave={saveHandler}
            onEdit={editHandler}
            editMode={editMode}
            key={task.id}
        />
    )
}

export default TaskCard
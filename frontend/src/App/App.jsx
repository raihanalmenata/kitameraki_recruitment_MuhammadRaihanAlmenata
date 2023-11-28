/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useEffect } from 'react'

import { TextField } from '@fluentui/react/lib/TextField'
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button'

import taskAPI from '../apis/task'

const TaskCard = ({ task, deleteHandler, updateHandler }) => {

  const [editMode, setEditMode] = useState(false)

  return (
    <li className="task-card" key={task.id}>
      {
        editMode ? 
        <form onSubmit={(e) => updateHandler(e) ? setEditMode(false) : null}>
          <TextField label='Task title' name='title' defaultValue={task.title} onGetErrorMessage={(val) => val === '' ? 'Please fill in task title' : ''} validateOnFocusOut required />
          <TextField label='Task description' name='description' defaultValue={task.description} />
          <input name='id' type="number" value={task.id} style={{ display : 'none'}} readOnly/>
          <PrimaryButton text='save' type='submit'/>
        </form>
        : 
        <>
          <h3 className="task-title">{task.title}</h3>
          <p className="task-desc">{task.description}</p>
          <DefaultButton text='delete' onClick={() => deleteHandler(task)}/>
          <DefaultButton text='edit' onClick={() => setEditMode(true)}/>
        </>
      }
    </li>
  )
}

const App = () => {

  const [taskList, setTaskList] = useState([])

  useEffect(
    () => async () => {
      const response = await taskAPI.getAll()
      setTaskList(response.data)
    },
    []
  )

  const handleSubmit = async (e) => {

    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const formValues = Object.fromEntries(form.entries());

    const response = await taskAPI.add(formValues)
    if (response.code == 201)
      setTaskList([
        response.data,
        ...taskList
      ])

  }

  const handleDelete = async ({ id }) => {

    const response = await taskAPI.deleteById(id)
    if (response.status == 204) {
      for (let i = 0; i < taskList.length; i++) {
        const curId = taskList[i]['id']
        if (curId == id) {
          taskList.splice(i, 1)
          break
        }
      }
      setTaskList([...taskList])
    }

  }

  const handleUpdate = async (e) => {

    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const updatedTask = Object.fromEntries(form.entries());

    const response = await taskAPI.updateById(updatedTask)
    if (response.code == 200){
      const { id } = updatedTask
      for (let i = 0; i < taskList.length; i++) {
        const curId = taskList[i]['id']
        if (curId == id) {
          taskList[i] = updatedTask
          break
        }
      }
      setTaskList([...taskList])
    }

  }

  return (
    <div className="app-con">
      <div className="list-con">
        <ul className="task-list">
          {
            taskList.map(
              (task) => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  deleteHandler={handleDelete} 
                  updateHandler={handleUpdate}
                />
              )
            )
          }
        </ul>
      </div>
      <div className="form-con">
        <form action="" className="task-form" onSubmit={handleSubmit}>
          <div className="title-con">
            <TextField
              label='Task title'
              name='title'
              onGetErrorMessage={(val) => val === '' ? 'Please fill in task title' : ''}
              validateOnFocusOut
              required
            />
          </div>
          <div className="desc-con">
            <TextField label='Task description' name='description' />
          </div>
          <div className="button-con">
            <PrimaryButton
              text='submit'
              type='submit' 
            />
          </div>
        </form>
      </div>
    </div>
  )

}

export default App
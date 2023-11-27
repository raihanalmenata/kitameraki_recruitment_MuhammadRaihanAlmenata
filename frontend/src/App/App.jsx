import { useState } from 'react'
import { useEffect } from 'react'

import { TextField } from '@fluentui/react/lib/TextField'
import { PrimaryButton } from '@fluentui/react/lib/Button'

import taskAPI from '../apis/task'

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
    const formValues  = Object.fromEntries(form.entries());
  
    const response = await taskAPI.add(formValues)
    if (response.code == 201)
      setTaskList([
        response.data,
        ...taskList
      ])

  }

  return (
    <div className="app-con">
      <div className="list-con">
        <ul className="task-list">
          {
            taskList.map(
              (task) => (
                <li className="task-card" key={task.id}>
                  <h3 className="task-title">{task.title}</h3>
                  <p className="task-desc">{task.description}</p>
                  <button className="del-but">delete</button>
                  <button className="edit-but">edit</button>
                </li>
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
            <TextField label='Task description' name='description'/>
          </div>
            <div className="button-con">
              <PrimaryButton 
              text='submit' 
              type='submit' />
            </div>
        </form>
      </div>
    </div>
  )

}

export default App
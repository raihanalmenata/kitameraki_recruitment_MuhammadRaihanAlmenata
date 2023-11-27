import { TextField } from '@fluentui/react/lib/TextField'
import { PrimaryButton } from '@fluentui/react/lib/Button'

import { handleSubmit } from './util'

const App = () => {

  return (
    <div className="app-con">
      <div className="list-con">
        <ul className="task-list">
          <li className="task-card"></li>
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
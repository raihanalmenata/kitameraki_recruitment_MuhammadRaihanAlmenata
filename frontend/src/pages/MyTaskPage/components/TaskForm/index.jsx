import { TextField } from '@fluentui/react/lib/TextField'
import { PrimaryButton } from '@fluentui/react/lib/Button'

import { useTasksDispatch } from '../../../../stores/tasks'

import taskAPI from '../../../../adapters/task'

const TaskForm = () => {

    const tasksDispatch = useTasksDispatch()

    const handleSubmit = async (e) => {

        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const formValues = Object.fromEntries(form.entries());
        const response = await taskAPI.add(formValues)
        if (response.code == 201)
            tasksDispatch({
                type: 'added',
                data: response.data,
                new: true
            })

    }


    return (
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
    )
}

export default TaskForm
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button'
import { TextField } from '@fluentui/react/lib/TextField'


const TaskCard = ({ id, title, description, onDelete, onSave, onEdit, editMode }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const form = new FormData(e.currentTarget)
        const newData = Object.fromEntries(form.entries());
        onSave(newData)
    }

    return (
        <li className="task-card">
            {
                editMode ?
                    <form onSubmit={handleSubmit}>
                        <TextField label='Title' name='title' defaultValue={title} onGetErrorMessage={(val) => val === '' ? 'Please fill this field' : ''} validateOnFocusOut required />
                        <TextField label='Description' name='description' defaultValue={description} />
                        <input name='id' type="number" value={id} style={{ display: 'none' }} readOnly />
                        <PrimaryButton text='save' type='submit' />
                    </form>
                    :
                    <>
                        <h3 className="task-title">{title}</h3>
                        <p className="task-desc">{description}</p>
                        <DefaultButton text='delete' onClick={() => onDelete({id, title, description})} />
                        <DefaultButton text='edit' onClick={() => onEdit({id, title, description})} />
                    </>
            }
        </li>
    )
}

export default TaskCard
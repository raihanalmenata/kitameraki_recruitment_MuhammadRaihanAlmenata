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
                    <form className='card-form' onSubmit={handleSubmit}>
                        <div className="field-con">
                            <TextField className='title-field' name='title' defaultValue={title} onGetErrorMessage={(val) => val === '' ? 'Please fill this field' : ''} validateOnFocusOut required />
                            <TextField name='description' defaultValue={description} />
                            <input name='id' type="number" value={id} style={{ display: 'none' }} readOnly />
                        </div>
                        <div className="but-con">
                            <PrimaryButton text='save' type='submit' />
                        </div>
                    </form>
                    :
                    <div className='card-info'>
                        <div className="field-con">
                        <TextField className='title-field' value={title} readOnly />
                        <TextField value={description} readOnly />                            
                        </div>
                        <div className="but-con">
                            <DefaultButton text='edit' onClick={() => onEdit({id, title, description})} />
                            <DefaultButton text='delete' onClick={() => onDelete({id, title, description})} />
                        </div>
                    </div>
            }
        </li>
    )
}

export default TaskCard
/* eslint-disable react/prop-types */
import { Draggable } from 'react-beautiful-dnd'
import { useState } from 'react';

import { TextField, DatePicker } from '@fluentui/react'

const ConfigurableField = ({ id, index, label, type, editAble, key }) => {
    
    const [editMode, setEditMode] = useState(true)
    
    let Input = null;
    switch (type) {
        case 'text':
            Input = <TextField label={editAble ? label : 'Text Field'} placeholder='Any text here . .' readOnly/>
            break;
            case 'number':
            Input = <TextField label={editAble ? label : 'Number Field'} placeholder='Numbers only . .' readOnly/>
            break;
            case 'date':
            Input = <TextField label={editAble ? label : 'Date Field'} placeholder='Select a Date . .' iconProps={{ iconName: 'Calendar' }} readOnly/>            
            break;
    }
    
    return (
        <Draggable draggableId={id} index={index}>
            { provided => (
                <form className='drag-con' { ...provided.draggableProps } { ...provided.dragHandleProps } ref={provided.innerRef} key={key}>
                    { Input }
                    { (editAble && editMode) && 
                        <>
                            <input type="text" />
                            <button type='submit'>save</button> 
                        </>
                    }
                    { (editAble && !editMode) &&  
                    <>
                        <button>edit label</button>
                        <button>delete</button>
                    </>
                    }
                </form>
            )}
        </Draggable>
    )
}

export default ConfigurableField
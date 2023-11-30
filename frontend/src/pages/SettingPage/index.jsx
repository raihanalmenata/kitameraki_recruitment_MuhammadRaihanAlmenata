import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Stack } from '@fluentui/react'

import ConfigurableField from './ConfigurableField'

import './style.css'

const SettingPage = () => {

    const [setting, setSetting] = useState([])
    const [isDragging, setIsDragging] = useState(false)

    const handleDragStart = (e) => {
        setIsDragging(true)
    }
    
    const handleDragEnd = (e) => {
        setIsDragging(false)
        console.log(e);
    }

    return (
        <Stack horizontal>
            <DragDropContext
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >

                <Droppable droppableId='opt-field' isDropDisabled={isDragging}>
                    {(provided) => (
                        <div className="opt-field" {...provided.droppableProps} ref={provided.innerRef}>
                            <ConfigurableField id={'text-opt'} index={0} label={'Text Field'} type={'text'} key={'0'}/>    
                            <ConfigurableField id={'number-opt'} index={1} label={'Number Field'} type={'number'} key={'1'}/>    
                            <ConfigurableField id={'date-opt'} index={2} label={'Date Field'} type={'date'} key={'2'}/>    
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                
                <Droppable droppableId='form-field'>
                    {(provided) => (
                        <div className="form-field" {...provided.droppableProps} ref={provided.innerRef}>
                            Column 2
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

            </DragDropContext>
        </Stack>
    )
}

export default SettingPage
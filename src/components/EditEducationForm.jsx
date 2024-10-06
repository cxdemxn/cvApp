import { useState } from "react"
import EditInputGroup from "./EditInputGroup"
import { v4 as uuidv4 } from 'uuid'

export default function({ 
    currentEdu,
    setCurrentEdu,
    handleSaveForm,
    setIsFormActive

}) {

    // console.log(currentEdu)
    function updateArray() {
        
    }

    function handleChanges(id, value) {
        const newEdu = { ...currentEdu }
        if (!newEdu['id'])
            newEdu['id'] = uuidv4()

        newEdu[id] = value
        // console.log(newEdu)


        setCurrentEdu(newEdu)
    }

    return (
        <form action="" className="edit-section-subgroup-form" onSubmit={ handleSaveForm }>
            <EditInputGroup 
                label={'School'}
                inputId={'school'} 
                placeholder={'Enter school / university'}
                onChange={handleChanges}
                value={currentEdu.id ? currentEdu['school'] : ''}
            />  

            <EditInputGroup 
                label={'Degree'}
                inputId={'degree'} 
                placeholder={'Enter degree / field of study'}
                fieldNote={'Required'}
                onChange={handleChanges}
                value={currentEdu.id ? currentEdu['degree'] : ''}

            />  

            <EditInputGroup 
                label={'Start Date'}
                inputId={'startDate'} 
                placeholder={'Enter start date'}
                fieldNote={'Required'}
                onChange={handleChanges}
                value={currentEdu.id ? currentEdu['startDate'] : ''}

            />  

            <EditInputGroup 
                label={'End Date'}
                inputId={'endDate'} 
                placeholder={'Enter end date'}
                fieldNote={'Required'}
                onChange={handleChanges}
                value={currentEdu.id ? currentEdu['endDate'] : ''}

            />  

            <EditInputGroup 
                label={'Location'}
                inputId={'location'} 
                placeholder={'Enter location'}
                fieldNote={'Optional'}
                onChange={handleChanges}
                value={currentEdu.id ? currentEdu['location'] : ''}

            />  

            <div className="form-controls">
                <button type="button">Delete</button>

                <div className="form-control-group">
                    <button type="button" onClick={() => setIsFormActive(false)}>Cancel</button>
                    <button type="submit" >Save</button>
                </div>
            </div>
        </form>
    )
}
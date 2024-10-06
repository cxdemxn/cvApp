import { useState } from "react"
import EditInputGroup from "./EditInputGroup"
import { v4 as uuidv4 } from 'uuid'

export default function({ 
    currentEdu,
    setCurrentEdu,
    handleSaveForm,
    resetForm,
    updateEduList,

}) {
    
    // immediately gives the new form an id when clicked
    if (!currentEdu.id) {
        currentEdu.id = uuidv4()
    }


    function handleChanges(id, value) {
        const updatedEdu = { ...currentEdu }
        updatedEdu[id] = value

        setCurrentEdu(updatedEdu)
        updateEduList(updatedEdu) // sends changes to the form to be updated in the array concurrently
    }


    return (
        <form action="" className="edit-section-subgroup-form" onSubmit={ handleSaveForm }>
            <EditInputGroup 
                label={'School'}
                inputId={'school'} 
                placeholder={'Enter school / university'}
                onChange={handleChanges}
                value={currentEdu['school'] ?? currentEdu['school']}
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
                    <button type="button" onClick={ resetForm }>Cancel</button>
                    <button type="submit" >Save</button>
                </div>
            </div>
        </form>
    )
}
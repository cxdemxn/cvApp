import { useState } from "react"
import EditInputGroup from "./EditInputGroup"
import { v4 as uuidv4 } from 'uuid'

export default function({ 
    currentEdu,
    setCurrentEdu,
    handleSaveForm

}) {
    const [ educationList, setEducationList ] = useState([])
    // const [ currentEdu, setCurrentEdu ] = useState({id: '', school: '', degree: '', startDate: '', endDate: '', location: ''})

    // function handleSaveForm(e) {
    //     e.preventDefault()
    //     const newEduList = [ ...educationList ]
    //     newEduList.push(currentEdu)

    //     console.log(newEduList)
    //     setEducationList(newEduList)
    //     e.target.reset()
    // }

    function handleChanges(id, value) {
        const newEdu = { ...currentEdu }
        if (!newEdu['id'])
            newEdu['id'] = uuidv4()

        newEdu[id] = value
        // console.log(newEdu)


        setCurrentEdu(newEdu)
    }

    return (
        <form action="" className="personalDeet" onSubmit={ handleSaveForm }>
            <EditInputGroup 
                label={'School'}
                inputId={'school'} 
                placeholder={'Enter school / university'}
                onChange={handleChanges}
            />  

            <EditInputGroup 
                label={'Degree'}
                inputId={'degree'} 
                placeholder={'Enter degree / field of study'}
                fieldNote={'Required'}
                onChange={handleChanges}
            />  

            <EditInputGroup 
                label={'Start Date'}
                inputId={'startDate'} 
                placeholder={'Enter start date'}
                fieldNote={'Required'}
                onChange={handleChanges}
            />  

            <EditInputGroup 
                label={'End Date'}
                inputId={'endDate'} 
                placeholder={'Enter end date'}
                fieldNote={'Required'}
                onChange={handleChanges}
            />  

            <EditInputGroup 
                label={'Location'}
                inputId={'location'} 
                placeholder={'Enter location'}
                fieldNote={'Optional'}
                onChange={handleChanges}
            />  

            <div className="form-controls">
                <button type="button">Delete</button>

                <div className="form-control-group">
                    <button type="button">Cancel</button>
                    <button type="submit" >Save</button>
                </div>
            </div>
        </form>
    )
}
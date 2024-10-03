import { useState } from "react"
import EditInputGroup from "./EditInputGroup"


export default function() {
    const [ educationList, setEducationList ] = useState([])

    function handleSaveForm(e) {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <form action="" className="personalDeet" onSubmit={ handleSaveForm }>
            <h2>Personal Details</h2>
            <EditInputGroup 
                label={'School'}
                inputId={'school'} 
                placeholder={'Enter school / university'}
                // onChange={handlePersonalDeetChange}
            />  

            <EditInputGroup 
                label={'Degree'}
                inputId={'degree'} 
                placeholder={'Enter degree / field of study'}
                fieldNote={'Required'}
                // onChange={handlePersonalDeetChange}
            />  

            <EditInputGroup 
                label={'Start Date'}
                inputId={'startDate'} 
                placeholder={'Enter start date'}
                fieldNote={'Required'}
                // onChange={handlePersonalDeetChange}
            />  

            <EditInputGroup 
                label={'End Date'}
                inputId={'endDate'} 
                placeholder={'Enter end date'}
                fieldNote={'Required'}
                // onChange={handlePersonalDeetChange}
            />  

            <EditInputGroup 
                label={'Location'}
                inputId={'location'} 
                placeholder={'Enter location'}
                fieldNote={'Optional'}
                // onChange={handlePersonalDeetChange}
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
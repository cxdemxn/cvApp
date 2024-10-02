import { useState } from "react"

function EditInputGroup({ inputId, fieldNote, placeholder, label, onChange }) {
    return (
        <div className="form-field-group">
            <div className="field-label">
                <label htmlFor={inputId}>
                    {label}
                    {
                        fieldNote
                        &&
                        (
                            <span className="field-note">{fieldNote}</span>
                        )
                    }
                </label>
                
            </div>
            <input 
                type="text" 
                id={inputId} 
                placeholder={placeholder} 
                onChange={(e) => { onChange(inputId, e.target.value) }} 
            />
        </div>
    )
}

export default function({ personalDeet, handlePersonalDeetChange }) {

    


    return (
        <form action="" className="personalDeet">

            <EditInputGroup 
                label={'Full Name'}
                inputId={'fullName'} 
                placeholder={'First and last name'}
                onChange={handlePersonalDeetChange}
            />  

            <EditInputGroup 
                label={'Email'}
                inputId={'email'} 
                placeholder={'Enter email'}
                fieldNote={'Recommended'}
                onChange={handlePersonalDeetChange}
            />  
     
            <EditInputGroup 
                label={'Phone Number'}
                inputId={'phoneNumber'} 
                placeholder={'Enter phone number'}
                fieldNote={'Recommended'}
                onChange={handlePersonalDeetChange}
            />  

            <EditInputGroup 
                label={'Address'}
                inputId={'address'} 
                placeholder={'City, Country'}
                fieldNote={'Recommended'}
                onChange={handlePersonalDeetChange}
            />  

        </form>
    )
}
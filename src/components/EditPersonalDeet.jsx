import EditInputGroup from "./EditInputGroup"

export default function({ personalDeet, handlePersonalDeetChange }) {

    


    return (
        <form action="" className="personalDeet">
            <h2>Personal Details</h2>
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
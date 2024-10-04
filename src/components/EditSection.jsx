import EditEducation from "./EditEducation"
import EditPersonalDeet from "./EditPersonalDeet"





export default function({ 
    personalDeet, 
    handlePersonalDeetChange, 

    currentEdu,
    setCurrentEdu,
    handleSaveForm,
    educationList

}) {
    return (
        <div className="cv-edit-section">
            <EditPersonalDeet 
                personalDeet={personalDeet} 
                handlePersonalDeetChange={handlePersonalDeetChange}
            />

            <EditEducation 
                currentEdu={currentEdu}
                setCurrentEdu={setCurrentEdu}
                handleSaveForm={handleSaveForm}
                educationList={educationList}
            />
        </div>
    )
}
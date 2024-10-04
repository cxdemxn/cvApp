import EditEducation from "./EditEducation"
import EditPersonalDeet from "./EditPersonalDeet"





export default function({ 
    personalDeet, 
    handlePersonalDeetChange, 

    currentEdu,
    setCurrentEdu,
    handleSaveForm

}) {
    return (
        <div className="edit-section">
            <EditPersonalDeet 
                personalDeet={personalDeet} 
                handlePersonalDeetChange={handlePersonalDeetChange}
            />

            <EditEducation 
                currentEdu={currentEdu}
                setCurrentEdu={setCurrentEdu}
                handleSaveForm={handleSaveForm}
            />
        </div>
    )
}
import EditEducation from "./EditEducation"
import EditPersonalDeet from "./EditPersonalDeet"





export default function({ 
    personalDeet, 
    handlePersonalDeetChange, 

    currentEdu,
    setCurrentEdu,
    handleSaveForm,
    educationList,
    handleSelectedItem,
    selectedEdu,


    isFormActive, 
    setIsFormActive

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
                handleSelectedItem={handleSelectedItem}
                selectedEdu={selectedEdu}

                isFormActive={isFormActive}
                setIsFormActive={setIsFormActive}
            />
        </div>
    )
}
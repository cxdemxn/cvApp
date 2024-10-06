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
    updateEduList,


    isFormActive, 
    setIsFormActive,
    resetForm

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
                updateEduList={updateEduList}

                isFormActive={isFormActive}
                setIsFormActive={setIsFormActive}
                resetForm={resetForm}
            />
        </div>
    )
}
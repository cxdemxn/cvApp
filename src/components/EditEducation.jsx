import EditEducationForm from "./EditEducationForm"
import EditEducationList from "./EditEducationList"


export default function({ 
    currentEdu,
    setCurrentEdu,
    handleSaveForm,
    educationList


}) {
    return (
        <div className="edit-section-subgroup">
            <div className="edit-section-head">
                <div className="edit-section-title">
                    <i></i>
                    <h2>Education</h2>
                </div>

                <i className="edit-section-dropdown-icon"></i>
            </div>

            <div className="edit-section-body">
                <EditEducationList 
                    educationList={educationList}
                />

                <EditEducationForm 
                    currentEdu={currentEdu}
                    setCurrentEdu={setCurrentEdu}
                    handleSaveForm={handleSaveForm}
                />
            </div>
        </div>
    )
}
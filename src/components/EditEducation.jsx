import EditEducationForm from "./EditEducationForm"


export default function({ 
    currentEdu,
    setCurrentEdu,
    handleSaveForm 

}) {
    return (
        <div className="edit-section">
            <div className="edit-section-head">
                <div className="edit-section-title">
                    <i></i>
                    <h2>Education</h2>
                </div>

                <i className="edit-section-dropdown-icon"></i>
            </div>

            <EditEducationForm 
                currentEdu={currentEdu}
                setCurrentEdu={setCurrentEdu}
                handleSaveForm={handleSaveForm}
            />
        </div>
    )
}
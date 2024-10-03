import EditEducationForm from "./EditEducationForm"


export default function() {
    return (
        <div className="edit-section">
            <div className="edit-section-head">
                <div className="edit-section-title">
                    <i></i>
                    <h2>Education</h2>
                </div>

                <i className="edit-section-dropdown-icon"></i>
            </div>

            <EditEducationForm />
        </div>
    )
}
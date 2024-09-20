import TemplateLoader from "./editSectComp/TemplateLoader"
import PersonalDetails from "./editSectComp/PersonalDetails"
import Education from "./editSectComp/Education"
import Experience from "./editSectComp/Experience"

export default function ({
    setFormData,
    setPersonalInfo
}) {
    return (
        <div className="edit-section">
            <TemplateLoader />
            <PersonalDetails 
                setFormData={setPersonalInfo}
            />
            <Education />
            <Experience />
        </div>
    )
}
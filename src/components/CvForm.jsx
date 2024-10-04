import CvEducation from "./CvEducation";
import CvPersonalDeet from "./CvPersonalDeet";

export default function({ 
    personalDeet ,
    educationList

}) {

    
    return (
        <div className="cv-form">
            <CvPersonalDeet personalDeet={personalDeet} />

            <div className="cv-form-body">
                <CvEducation educationList={educationList}/>
            </div>
        </div>
    )
}
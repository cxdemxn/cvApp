import CvEducationListItem from "./CvEducationListItem"


export default function({
    educationList
}) {

    const fEduList = educationList.map((education) => (
        <CvEducationListItem key={education.id} education={education} />
    ))
    // console.log(fEduList)

    return (
        <div className="cv-education">
            <div className="cv-body-section-head">
                <h3>Education</h3>
            </div>

            <div className="cv-body-section-list">
                <ul>
                    {fEduList}
                </ul>
            </div>
        </div>
    )
}
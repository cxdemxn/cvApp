function EducationListItem({
    education
 }) {

    console.log(education)

    return (
        <li>
            <div className="list-left">
                <div>{education.startDate} - {education.endDate}</div> 
                <div>{education.location}</div>
            </div>

            <div className="list-right">
                <div><b>{education.school}</b></div>
                <div>{education.degree}</div>
            </div>
        </li>
    )
 }

export default function({
    educationList
}) {

console.log(educationList)

    const fEduList = educationList.map((education) => (
        <EducationListItem key={education.id} education={education} />
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
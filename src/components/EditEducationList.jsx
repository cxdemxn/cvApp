function EditEducationListItem({education}) {

    // console.log(education)
    return (
        <button type="button" className="edit-list-item" data-id={education.id}>
            <span className="edit-list-item-text">{education.school}</span>
            <i className="hide-edit-item-icon"></i>
        </button>
    )
}

export default function({
    educationList

}) {

    console.log(educationList)

    const fEduList = educationList.map(education => (
        <EditEducationListItem key={education.id} education={education} />
    ))

    return (
        <div className="edit-list-section">
            <ul>
                {fEduList}
            </ul>

            <button type="button" className="add-button">+ Education</button>
        </div>
    )
}
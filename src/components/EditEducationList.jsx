import EditEducationListItem from "./EditEducationListItem"

export default function({
    educationList,
    setIsFormActive,
    handleSelectedItem

}) {

    // console.log(educationList)

    const fEduList = educationList.map(education => (
        <EditEducationListItem key={education.id} education={education} handleSelectedItem={handleSelectedItem} />
    ))

    return (
        <div className="edit-list-section">
            <ul>
                {fEduList}
            </ul>

            <button type="button" className="add-button" onClick={() => setIsFormActive(true)}>+ Education</button>
        </div>
    )
}
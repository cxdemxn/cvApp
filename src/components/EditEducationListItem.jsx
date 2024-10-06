export default function EditEducationListItem({
    education,
    handleSelectedItem,

}) {

    return (
        <button type="button" className="edit-list-item" data-id={education.id} onClick={() => handleSelectedItem(education.id)}>
            <span className="edit-list-item-text">{education.school}</span>
            <i className="hide-edit-item-icon"></i>
        </button>
    )
}
import EditPersonalDeet from "./EditPersonalDeet"





export default function({ personalDeet, handlePersonalDeetChange}) {
    return (
        <div className="edit-section">
            <EditPersonalDeet personalDeet={personalDeet} handlePersonalDeetChange={handlePersonalDeetChange} />
        </div>
    )
}
export default function({ personalDeet }) {

    return (
        <div className="cv-personal-details">
            <div className="personal-details-head">
                <h2>{personalDeet.fullName}</h2>
            </div>

            <div className="personal-details-body">
                <div>
                    <span>{personalDeet.email}</span>
                </div>
                <div>
                    <span>{personalDeet.phoneNumber}</span>
                </div>
                <div>
                    <span>{personalDeet.address}</span>
                </div>
            </div>
        </div>
    )
}
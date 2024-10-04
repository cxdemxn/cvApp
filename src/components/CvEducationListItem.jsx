export default function({
    education
 }) {

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
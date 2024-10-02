import CvPersonalDeet from "./CvPersonalDeet";

export default function({ personalDeet }) {
    return (
        <div className="cv-form">
            <CvPersonalDeet personalDeet={personalDeet} />
        </div>
    )
}
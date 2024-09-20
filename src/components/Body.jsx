import { useState } from "react"
import Sidebar from "./Sidebar"
import EditSection from "./EditSection"

export default function () {

    const [ personalInfo, setPersonalInfo ] = useState({
        fullName: '',
        email: '',
        phoneNum: '',
        address: ''
    })

    return (
        <div className="body container">
            <div className="edit-container">
                <Sidebar />
                <EditSection
                    setPersonalInfo={setPersonalInfo}
                />
            </div>
            <div className="final-container">
                <p>full name: {personalInfo.fullName}</p>
                <p>email: {personalInfo.email}</p>
                <p>phone number: {personalInfo.phoneNum}</p>
                <p>address: {personalInfo.address}</p>
            </div>
        </div>
    )
}
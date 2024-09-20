import Form from "./Form"

export default function ({
    setFormData
}) {

    return (
        <div className="personal-details edit-section">
            <h2>Personal Details</h2>
            <Form formInfo={[
                {
                    id: 'fullName',
                    label: 'Full Name',
                    type: 'text',
                    placeholder: 'John Doe',
                    recommended: false,
                },
                {
                    id: 'email',
                    label: 'Email',
                    type: 'email',
                    placeholder: 'jondoe@gmail.com',
                    recommended: true,
                },
                {
                    id: 'phoneNum',
                    label: 'Phone number',
                    type: 'tel',
                    placeholder: '+229 40241843',
                    recommended: true,
                },
                {
                    id: 'address',
                    label: 'Address',
                    type: 'text',
                    placeholder: 'Enter address',
                    recommended: true,
                },
            ]} 
            setFormData={setFormData}
            />
        </div>
    )
}
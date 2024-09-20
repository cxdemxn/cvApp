export default function ({
    formInfo,
    setFormData
}) {

    const handleChange = (e) => {   
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const formContent = formInfo.map(info => {
        return (
            <div className="form-group" key={info.id}>
                <label htmlFor={info.id}>
                    <span className="label-text">{info.label}</span>
                    {info.recommended && <span className="recommended-text">recommended</span>}
                </label>
                <input 
                    type={info.type}
                    id={info.id}
                    placeholder={info.placeholder}
                    onChange={handleChange}
                />
            </div>
        )
    });
    
    return (
        <form action="" className="personal-details edit-section">
            {
                formContent
            }
        </form>
    )
}
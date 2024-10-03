export default function EditInputGroup({ inputId, fieldNote, placeholder, label, onChange }) {
    return (
        <div className="form-field-group">
            <div className="field-label">
                <label htmlFor={inputId}>
                    {label}
                    {
                        fieldNote
                        &&
                        (
                            <span className="field-note">{fieldNote}</span>
                        )
                    }
                </label>
                
            </div>
            <input 
                type="text" 
                id={inputId} 
                placeholder={placeholder} 
                onChange={(e) => { onChange(inputId, e.target.value) }} 
            />
        </div>
    )
}
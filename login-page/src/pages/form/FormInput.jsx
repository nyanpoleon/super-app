import { useState } from "react";
import "../Register.css"

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, id, onChange, ...inputProps} = props;
    
    const handleFocus = (event) => {
        setFocused(true);
    }
    return(
        <div className="formInput">
            
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            <label className="checkbox-label" htmlFor={id}>{label}</label>
            <span className="errorMessage">{errorMessage}</span>
        </div>
    )
}

export default FormInput;
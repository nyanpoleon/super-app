import "../Register.css"

const FormInput = (props) => {
    const {label, id, onChange, ...inputProps} = props;
    return(
        <div className="formInput">
            
            <input {...inputProps} onChange={onChange}/>
            <label className="checkbox-label" htmlFor={id}>{label}</label>
        </div>
    )
}

export default FormInput;
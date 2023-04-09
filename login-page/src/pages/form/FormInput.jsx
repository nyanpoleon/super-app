import "../Register.css"

const FormInput = (props) => {
    const {label, id, onChange, ...inputProps} = props;
    return(
        <div className="formInput">
            {/* <label>username</label> */}
            <input {...inputProps} onChange={onChange}/>
        </div>
    )
}

export default FormInput;
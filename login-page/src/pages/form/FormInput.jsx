import "../Register.css"

const FormInput = (props) => {
    return(
        <div className="formInput">
            {/* <label>username</label> */}
            <input placeholder={props.placeholder} onChange={event=>props.setFormData(event.target.value)}/>
        </div>
    )
}

export default FormInput;
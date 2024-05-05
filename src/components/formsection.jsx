// import '../styles/formsection.css'

function FormSection(props) {

    const editButtonId = "btn-edit-" + props.name.toLowerCase()
    const submitButtonId = "btn-submit-" + props.name.toLowerCase()
    const formId = "form-section-" + props.name.toLowerCase()
 
    return (
        <div className="section">
            <div className="section-header">
                <h2>{props.name}</h2>
                <div className="buttons">
                    <button id={editButtonId}>Edit</button>
                    <button id={submitButtonId}>Submit</button>
                </div>
            </div>
            <form id={formId}>
            {props.children}
            </form>
      </div>
  )
}

export default FormSection

import '../styles/inputfield.css'

function InputField(props) {
    const data = props.label.replace(/\s+/g, '-').toLowerCase()
    const inputId = "input-" + data
    const outputId = "output-" + data

    if (props.type === "textarea") {
      return (
        <label htmlFor={inputId} className="field">
        <span className="field-input">{props.label}</span>
        <textarea id={inputId} name={data} rows="5"></textarea>
      </label>
      )
    }
  
    return (
    <label htmlFor={inputId} className="field">
      <span className="field-input">{props.label}</span>
      <input type={props.type} id={inputId} name={data} />
      <span id={outputId}></span>
    </label>
  )
}

export default InputField

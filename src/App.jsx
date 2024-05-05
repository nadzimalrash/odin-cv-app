import { useState } from 'react'
import InputField from './components/inputfield.jsx'
import FormSection from './components/formsection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>CV</h1>
      <FormSection name="General">
        <InputField label="Name" type="text"/>
        <InputField label="Email" type="email"/>
        <InputField label="Contact" type="tel"/>
      </FormSection>

      <FormSection name="Education">
        <InputField label="School Name" type="text"/>
        <InputField label="Course" type="text"/>
        <InputField label="Study Date" type="date"/>
      </FormSection>

      <FormSection name="Experience">
        <InputField label="Company Name" type="text"/>
        <InputField label="Position" type="text"/>
        <InputField label="Responsibilities" type="textarea"/>
        <InputField label="Start Date" type="date"/>
        <InputField label="End Date" type="date"/>
      </FormSection>
    </main>
  )
}

export default App

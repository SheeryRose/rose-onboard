import { useState } from 'react'

export default function PersonalInfo({ formData, handleChange, nextStep }) {
  const [errors, setErrors] = useState({})

  function validate(name, value) {
    let msg = ''
    if (name === 'firstName' && !value.trim()) msg = 'First name is required'
    if (name === 'lastName' && !value.trim()) msg = 'Last name is required'
    if (name === 'email') {
      if (!value.trim()) msg = 'Email is required'
      else if (!value.includes('@')) msg = 'Email must contain @'
    }
    setErrors(prev => ({ ...prev, [name]: msg }))
  }

  function onChange(e) {
    handleChange(e)
    validate(e.target.name, e.target.value)
  }

  const isValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.includes('@')

  return (
    <div className="step">
      <h2>Personal Info</h2>

      <div className="field">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          placeholder="Enter first name"
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div className="field">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          placeholder="Enter last name"
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div className="field">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Enter email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="btn-group">
        <button onClick={nextStep} disabled={!isValid}>Next</button>
      </div>
    </div>
  )
}
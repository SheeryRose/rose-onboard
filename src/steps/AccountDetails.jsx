import { useState } from 'react'

export default function AccountDetails({ formData, handleChange, nextStep, prevStep }) {
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  function validate(name, value) {
    let msg = ''
    if (name === 'username' && !value.trim()) msg = 'Username is required'
    if (name === 'password' && value.length < 8) msg = 'Password must be at least 8 characters'
    setErrors(prev => ({ ...prev, [name]: msg }))
  }

  function onChange(e) {
    handleChange(e)
    validate(e.target.name, e.target.value)
  }

  const isValid =
    formData.username.trim() &&
    formData.password.length >= 8

  return (
    <div className="step">
      <h2>Account Details</h2>

      <div className="field">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={onChange}
          placeholder="Choose a username"
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>

      <div className="field">
        <label>Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={onChange}
            placeholder="Create a password"
          />
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="btn-group">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep} disabled={!isValid}>Next</button>
      </div>
    </div>
  )
}
import { useState } from 'react'

export default function Review({ formData, prevStep }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success">
        <div className="success-icon">✓</div>
        <h2>You're all set!</h2>
        <p>Welcome, {formData.firstName}Your account has been created.</p>
      </div>
    )
  }

  return (
    <div className="step">
      <h2>Review & Submit</h2>

      <div className="review-box">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Password:</strong> {'*'.repeat(formData.password.length)}</p>
      </div>

      <div className="btn-group">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
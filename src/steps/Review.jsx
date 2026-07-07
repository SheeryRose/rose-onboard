export default function Review({ formData, prevStep }) {
  function handleSubmit() {
    console.log('Form submitted:', formData)
    alert('Form submitted successfully!')
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
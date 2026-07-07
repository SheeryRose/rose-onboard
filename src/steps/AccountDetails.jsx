export default function AccountDetails({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div className="step">
      <h2>Account Details</h2>

      <div className="field">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Choose a username"
        />
      </div>

      <div className="field">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
        />
      </div>

      <div className="btn-group">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  )
}
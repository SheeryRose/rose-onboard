export default function PersonalInfo({ formData, handleChange, nextStep }) {
  return (
    <div className="step">
      <h2>Personal Info</h2>

      <div className="field">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
        />
      </div>

      <div className="field">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
        />
      </div>

      <div className="field">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>

      <div className="btn-group">
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  )
}
import { useState } from 'react'
import PersonalInfo from './steps/PersonalInfo'
import AccountDetails from './steps/AccountDetails'
import Review from './steps/Review'
import ProgressBar from './components/ProgressBar'

export default function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  })

  function nextStep() {
    setStep(step + 1)
  }

  function prevStep() {
    setStep(step - 1)
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="wrapper">
      <div className="card">
        <ProgressBar step={step} />
        <h1>Rose Onboard</h1>
        <p className="step-label">Step {step} of 3</p>

        {step === 1 && (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <AccountDetails
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <Review
            formData={formData}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  )
}
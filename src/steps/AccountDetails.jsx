import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

export default function AccountDetails({ formData, handleChange, nextStep, prevStep }) {
  const [showPassword, setShowPassword] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: formData.username,
      password: formData.password
    }
  })

  function onSubmit(data) {
    handleChange({ target: { name: 'username', value: data.username } })
    handleChange({ target: { name: 'password', value: data.password } })
    nextStep()
  }

  return (
    <div className="step">
      <h2>Account Details</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            placeholder="Choose a username"
            {...register('username')}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        <div className="field">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              {...register('password')}
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <div className="btn-group">
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}
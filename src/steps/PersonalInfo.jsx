import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').includes('@', { message: 'Email must contain @' })
})

export default function PersonalInfo({ formData, handleChange, nextStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    }
  })

  function onSubmit(data) {
    handleChange({ target: { name: 'firstName', value: data.firstName } })
    handleChange({ target: { name: 'lastName', value: data.lastName } })
    handleChange({ target: { name: 'email', value: data.email } })
    nextStep()
  }

  return (
    <div className="step">
      <h2>Personal Info</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            {...register('firstName')}
          />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>

        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            {...register('lastName')}
          />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter email"
            {...register('email')}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="btn-group">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}
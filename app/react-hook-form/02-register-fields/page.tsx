'use client'

import ReactDOM from 'react-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInputs {
  firstName: String
  gender: GenderEnum
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInputs>()
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register('firstName')} />
      <label>Gender Selection</label>
      <select {...register('gender')}>
        <option value='female'>female</option>
        <option value='male'>male</option>
        <option value='other'>other</option>
      </select>
      <input type='submit' />
    </form>
  )
}

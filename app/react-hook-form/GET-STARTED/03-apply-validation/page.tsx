'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  firstName: string
  lastName: string
  age: number
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        firstName:
        <input
          {...register('firstName', {
            required: 'firstName is required. ',
            maxLength: { value: 20, message: 'maxLength is 20. ' },
          })}
        />
      </label>
      <p>{errors.firstName?.message}</p>
      <br />
      <label>
        lastName:
        <input
          {...register('lastName', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'pattern is not matched . ',
            },
          })}
        />
      </label>
      <p>{errors.lastName?.message}</p>
      <br />
      <label>
        age:
        <input
          type='number'
          {...register('age', {
            min: { value: 18, message: 'minValue is 18. ' },
            max: { value: 99, message: 'maxValue is 99' },
          })}
        />
      </label>
      <p>{errors.age?.message}</p>
      <br />
      <input type='submit' />
    </form>
  )
}

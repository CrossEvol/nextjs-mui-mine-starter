'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  age: number
  email: string
  phone: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: 'admin',
      email: '123@qq.com',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const watchName = watch('name') // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>
        username:
        <input
          type='text'
          {...register('name', { required: 'name is required. ' })}
        />
      </label>
      <p>{watchName}</p>
      <p>{errors.name?.message}</p>
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <label>
        age:
        <input
          type='number'
          {...register('age', { required: 'age is required. ' })}
        />
      </label>
      <p>{errors.age?.message}</p>
      <br />
      <label>
        email:{' '}
        <input
          type='email'
          {...register('email', { required: 'email is required. ' })}
        />
      </label>
      <p>{errors.email?.message}</p>
      <br />
      <label>
        phone:{' '}
        <input
          type='tel'
          {...register('phone', {
            required: 'phone is required. ',
            minLength: { value: 4, message: 'minLength is 4. ' },
          })}
        />
      </label>
      <p>{errors.phone?.message}</p>
      <br />
      {/* errors will return when field validation fails  */}
      {errors.name && <span>This field is required</span>}
      <br />
      <input type='submit' />
    </form>
  )
}

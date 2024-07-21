'use client'

import React from 'react'
import {
  Path,
  useForm,
  UseFormRegister,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form'

interface IFormInputs {
  'First Name': string
  Age: number
}

type InputProps = {
  label: Path<IFormInputs>
  register: UseFormRegister<IFormInputs>
  required: boolean
}

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)

const SelectOrigin = ({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value='20'>20</option>
      <option value='30'>30</option>
    </select>
  </>
)

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormInputs>>
>(SelectOrigin)

const App = () => {
  const { register, handleSubmit } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    alert(JSON.stringify(data))
  }

  const onSubmitError: SubmitErrorHandler<IFormInputs> = (err) => {
    alert('oops..')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
      <Input label='First Name' register={register} required />
      <Select label='Age' {...register('Age')} />
      <input type='submit' />
    </form>
  )
}

export default App

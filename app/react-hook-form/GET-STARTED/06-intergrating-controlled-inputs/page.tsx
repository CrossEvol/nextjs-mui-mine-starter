'use client'

import { Checkbox } from '@mui/material'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

interface IFormInputs {
  TextField: string
  MyCheckbox: boolean
}

function App() {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      MyCheckbox: false,
    },
  })
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='MyCheckbox'
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <input type='submit' />
    </form>
  )
}

export default App

'use client'

import Select from 'react-select'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import Input from '@mui/material/Input'
import { TextField, Select as MuiSelect } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'

interface IFormInput {
  firstName: string
  lastName: string
  iceCreamType: { label: string; value: string }
  age: number
}

const App = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      iceCreamType: {},
      age: 10,
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='firstName'
        control={control}
        // render={({ field }) => <Input {...field} />}
        render={({ field }) => (
          <TextField
            id='outlined-basic'
            label='FirstName'
            variant='outlined'
            {...field}
          />
        )}
      />
      <br />
      <Controller
        name='iceCreamType'
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          />
        )}
      />
      <br />
      <Controller
        name='age'
        control={control}
        render={({ field }) => (
          <>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <MuiSelect {...field} labelId='demo-simple-select-label'>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </MuiSelect>
          </>
        )}
      />
      <input type='submit' />
    </form>
  )
}

export default App

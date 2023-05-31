import React, { useState } from 'react'
import * as Form from '@radix-ui/react-form'
import * as Checkbox from '@radix-ui/react-checkbox'
import { AppleIcon, GoogleIcon, CheckBoxIcon } from './Icons'
import { NameInput, EmailInput, PasswordInput, PhoneNumberInput } from './Inputs'

export const SignupForm = () => {

  const [formDara, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  })

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
    console.log(formDara)
  }

  return (
    <Form.Root className='grid w-11/12 max-w-[400px] px-4 bg-white rounded-xl'>
      <div className='py-5 grid gap-6 border-b border-solid border-lightgray'>
        <p className='text-lg font-medium text-dark-black'>Sign Up</p>
        <div className='grid gap-4'>
          <button className='px-4 py-[10px] inline-flex justify-center items-center gap-3 text-sm font-medium text-dark-black border border-solid border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-primary-ring focus:border-primary-ring'>
            <GoogleIcon />
            Sign up with google
          </button>
          <button className='px-4 py-[10px] inline-flex justify-center items-center gap-3 text-sm font-medium text-dark-black border border-solid border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-primary-ring focus:border-primary-ring'>
            <AppleIcon />
            Sign up with Apple
          </button>
        </div>
      </div>
      <div className='py-5 grid gap-4 border-b border-solid border-lightgray'>
        <Form.Field className='grid gap-2 items-start' name='name'>
          <Form.Label className='text-sm font-medium text-dark-black'>Name</Form.Label>
          <NameInput onChange={handleChange}/>
        </Form.Field>
        <Form.Field className='grid gap-2 items-start' name='email'>
          <Form.Label className='text-sm font-medium text-dark-black'>Email</Form.Label>
          <EmailInput onChange={handleChange}/>
        </Form.Field>
        <Form.Field className='grid gap-2 items-start' name='phone'>
          <Form.Label className='text-sm font-medium text-dark-black'>Phone Number</Form.Label>
          <PhoneNumberInput onChange={handleChange}/>
        </Form.Field>
        <Form.Field className='grid gap-2 items-start' name='password'>
          <Form.Label className='text-sm font-medium text-dark-black'>Password</Form.Label>
          <PasswordInput onChange={handleChange}/>
        </Form.Field>
        <Form.Field className='flex gap-4 items-center'>
          <Form.Control asChild>
            <Checkbox.Root className='h-4 w-4 appearance-none flex items-center justify-center rounded-[4px] bg-white outline-none border border-solid border-lightgray'>
              <Checkbox.Indicator>
                <CheckBoxIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </Form.Control>
          <Form.Label className='text-sm font-medium text-dark-black'>I agree with Terms and Conditions</Form.Label>
        </Form.Field>
        <Form.Submit asChild>
          <button className='px-3 py-2 rounded-lg bg-primary text-sm font-medium text-white focus:outline-none focus:ring focus:ring-primary-ring focus:border-primary-ring'>Submit</button>
        </Form.Submit>
      </div>
      <div className='py-5'>
        <p className='text-sm font-normal text-center'>Already have an account ?</p>
        <p className='text-center'>
          <a className='text-center text-sm font-semibold text-blue-700' href="">
            Sign In
          </a>
        </p>
      </div>
    </Form.Root>
  )
}

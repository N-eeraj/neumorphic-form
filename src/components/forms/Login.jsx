import { useState } from 'react'

import Input from '@components/Input'
import Button from '@components/Button'
import Toast from '@components/Toast'

import { isEmpty } from '@/utils'
import formStyles from '@styles/form.module.css'

const Login = ({onChangeForm, onSubmit}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    if (isEmpty(email)) return alert('Please enter your e-mail id')
    if (isEmpty(password)) return alert('Please enter your password')
    console.log({ email, password })
  }

  return (
    <>
      <h3 className={formStyles.heading}>
        Login
      </h3>

      <div className={formStyles.inputContainer}>
        <Input type="email" placeholder="Enter Email" value={email} onInput={input => setEmail(input)} />
        <Input type="password" placeholder="Enter Password" value={password} onInput={input => setPassword(input)} />
      </div>

      <div className={formStyles.actionsContainer}>
        <Button text="Login" onClick={handleClick} />

        <div className={formStyles.switchText}>
          Don't have an account?
          <span className={formStyles.switchButton} onClick={onChangeForm}>
            Sign Up
          </span>
        </div>
      </div>

      <Toast text="Login Text" type="success" />
    </>
  )
}

export default Login
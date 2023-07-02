import { useState, useContext } from 'react'

import Input from '@components/Input'
import Button from '@components/Button'

import { LoginCredentialsContext } from '@/context'
import { isValidEmail, isValidPassword, isMatchingPasswords } from '@/utils'
import formStyles from '@styles/form.module.css'

const Register = ({ onChangeForm, onToast }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, ConfirmPassword] = useState('')

  const [loginCredentials, setLoginCredentials] = useContext(LoginCredentialsContext)

  const handleClick = () => {
    // validations
    if (!isValidEmail(email))
      return onToast({show: true, text: 'Invalid Email', success: false})
    const [validPassword, passwordError] = isValidPassword(password)
    if (!validPassword)
      return onToast({show: true, text: passwordError, success: false})
    if (!isMatchingPasswords(password, confirmPassword))
      return onToast({show: true, text: 'Passwords not matching', success: false})

    // check if email exists
    const credentials = loginCredentials.find(({ email: mailId }) => mailId === email)
    if (credentials)
      return onToast({show: true, text: 'User exists! Please login', success: false})

    // add credentials to list
    setLoginCredentials(prevCredentials => [...prevCredentials, { email, password }])
    onToast({show: true, text: 'Sign Up Successfull', success: true})
  }

  return (
    <>
      <h3 className={formStyles.heading}>
        Register
      </h3>

      <div className={formStyles.inputContainer}>
        <Input type="email" placeholder="Enter Email" value={email} onInput={input => setEmail(input)} />
        <Input type="password" placeholder="Enter Password" value={password} onInput={input => setPassword(input)} />
        <Input type="password" placeholder="Confirm Password" value={confirmPassword} onInput={input => ConfirmPassword(input)} />
      </div>

      <div className={formStyles.actionsContainer}>
        <Button text="Sign Up" onClick={handleClick} />

        <div className={formStyles.switchText}>
          Already have an account?
          <span className={formStyles.switchButton} onClick={() => onChangeForm('login')}>
            Login
          </span>
        </div>
      </div>
    </>
  )
}

export default Register
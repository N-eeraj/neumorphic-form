import { useState, useContext } from 'react'

import Input from '@components/Input'
import Button from '@components/Button'
import Toast from '@components/Toast'

import { LoginCredentialsContext } from '@/context'
import { isValidEmail, isValidPassword, isMatchingPasswords } from '@/utils'
import formStyles from '@styles/form.module.css'

const Register = ({onChangeForm}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, ConfirmPassword] = useState('')
  const [toast, setToast] = useState({ show: false, text: null, success: null })

  const [_, setLoginCredentials] = useContext(LoginCredentialsContext)

  const handleClick = () => {
    // validations
    if (!isValidEmail(email))
      return setToast({show: true, text: 'Invalid Email', success: false})
    const [validPassword, passwordError] = isValidPassword(password)
    if (!validPassword)
      return setToast({show: true, text: passwordError, success: false})
    if (!isMatchingPasswords(password, confirmPassword))
      return setToast({show: true, text: 'Passwords not matching', success: false})

    // add credentials to list
    setLoginCredentials(prevCredentials => [...prevCredentials, { email, password }])
    setToast({show: true, text: 'Sign Up Successfull', success: true})
  }

  const handleResetToast = () => setToast({ show: false, text: null, success: null })

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
          <span className={formStyles.switchButton} onClick={onChangeForm}>
            Login
          </span>
        </div>
      </div>

      <Toast show={toast.show} text={toast.text} success={toast.success} onReset={handleResetToast} />
    </>
  )
}

export default Register
import { useRef, useContext } from 'react'

import Input from '@components/Input'
import Button from '@components/Button'

import { LoginContext } from '@components/LoginCredentialsProvider'
import { isValidEmail, isValidPassword, isMatchingPasswords } from '@/utils'
import formStyles from '@styles/form.module.css'

const Register = ({ onChangeForm, onToast }) => {
  const email = useRef('')
  const password = useRef('')
  const confirmPassword = useRef('')

  const {loginCredentials, setLoginCredentials} = useContext(LoginContext)

  const handleEmailChange = input => email.current = input
  const handlePasswordChange = input => password.current = input
  const handleConfirmPasswordChange = input => confirmPassword.current = input

  const handleClick = () => {
    // validations
    if (!isValidEmail(email.current))
      return onToast({show: true, text: 'Invalid Email', success: false})
    const [validPassword, passwordError] = isValidPassword(password.current)
    if (!validPassword)
      return onToast({show: true, text: passwordError, success: false})
    if (!isMatchingPasswords(password.current, confirmPassword.current))
      return onToast({show: true, text: 'Passwords not matching', success: false})

    // check if email exists
    const credentials = loginCredentials.find(({ email: mailId }) => mailId === email.current)
    if (credentials)
      return onToast({show: true, text: 'User exists! Please login', success: false})

    // add credentials to list
    setLoginCredentials(prevCredentials => [
      ...prevCredentials,
      { email: email.current, password: password.current }
    ])
    onToast({show: true, text: 'Sign Up Successfull', success: true})
  }

  return (
    <>
      <h3 className={formStyles.heading}>
        Register
      </h3>

      <div className={formStyles.inputContainer}>
        <Input type="email" placeholder="Enter Email" value={email} onChange={handleEmailChange} />
        <Input type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} />
        <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
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
import { useState } from 'react'
import Input from '@components/Input'
import Button from '@components/Button'
import formStyles from '@styles/form.module.css'

const Register = ({onChangeForm, onSubmit}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, ConfirmPassword] = useState('')

  const handleClick = () => onSubmit({ email, password, confirmPassword })

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
    </>
  )
}

export default Register
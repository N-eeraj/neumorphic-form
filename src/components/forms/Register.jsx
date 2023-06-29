import Input from '@components/Input'
import Button from '@components/Button'
import formStyles from '@styles/form.module.css'

const Register = ({onChangeForm, onSubmit}) => {
  const handleClick = () => {
    onSubmit({
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <>
      <h3 className={formStyles.heading}>
        Register
      </h3>

      <div className={formStyles.inputContainer}>
        <Input type="email" placeholder="Enter Email" />
        <Input type="password" placeholder="Enter Password" />
        <Input type="password" placeholder="Confirm Password" />
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
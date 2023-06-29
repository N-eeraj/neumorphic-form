import Input from '@components/Input'
import Button from '@components/Button'
import formStyles from '@styles/form.module.css'

const Login = ({onChangeForm, onSubmit}) => {
  const handleClick = () => {
    onSubmit({
      email: '',
      password: ''
    })
  }

  return (
    <>
      <h3 className={formStyles.heading}>
        Login
      </h3>

      <div className={formStyles.inputContainer}>
        <Input placeholder="Enter Email" />
        <Input type="password" placeholder="Enter Password" />
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
    </>
  )
}

export default Login
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
        <input type="text" />
        <input type="password" />
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
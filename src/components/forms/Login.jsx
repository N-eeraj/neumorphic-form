import formStyles from '@styles/form.module.css'

const Login = () => {
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
        <button>
          Login
        </button>

        <div className={formStyles.switchText}>
          Don't have an account?
          <span className={formStyles.switchButton}>
            Sign Up
          </span>
        </div>
      </div>
    </>
  )
}

export default Login
import formStyles from '@styles/form.module.css'

const Register = () => {
  return (
    <>
      <h3 className={formStyles.heading}>
        Register
      </h3>

      <div className={formStyles.inputContainer}>
        <input type="text" />
        <input type="password" />
        <input type="password" />
      </div>

      <div className={formStyles.actionsContainer}>
        <button>
          Register
        </button>

        <div className={formStyles.switchText}>
          Already have an account?
          <span className={formStyles.switchButton}>
            Login
          </span>
        </div>
      </div>
    </>
  )
}

export default Register
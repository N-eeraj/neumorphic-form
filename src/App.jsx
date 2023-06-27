import { useState } from "react"

import LoginForm from '@components/forms/Login'
import RegisterForm from '@components/forms/Register'

import { preventSubmit } from '@/utils'

import appStyles from '@styles/app.module.css'

const App = () => {
  const [formType, setFormType] = useState('login')

  const handleFormChange = () => setFormType(prevValue => prevValue === 'login' ? 'signUp' : 'login')

  const handleSubmit = data => console.log(data)

  return (
    <div className={appStyles.mainBackground}>
      <form className={appStyles.form} onSubmit={preventSubmit}>
        {formType === 'login' ? <LoginForm onChangeForm={handleFormChange} onSubmit={handleSubmit} /> : <RegisterForm onChangeForm={handleFormChange} onSubmit={handleSubmit} />}
      </form>
    </div>
  )
}

export default App
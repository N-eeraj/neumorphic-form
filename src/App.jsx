import { useState } from "react"

import LoginForm from '@components/forms/Login'
import RegisterForm from '@components/forms/Register'

import { preventSubmit } from '@/utils'

const App = () => {
  const [formType, setFormType] = useState('login')

  return (
    <div>
      <form onSubmit={preventSubmit}>
        {formType === 'login' ? <LoginForm /> : <RegisterForm />}
      </form>
    </div>
  )
}

export default App
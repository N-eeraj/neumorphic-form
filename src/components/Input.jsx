import { useState } from 'react'
import inputStyles from '@styles/input.module.css'
import openEyeIcon from '@/assets/eye/open.svg'
import closeEyeIcon from '@/assets/eye/close.svg'

const Input = ({type, placeholder, onChange}) => {
  const [showPassword, setShowPassword] = useState(false)

  const currentType = (() => {
    if (!type) return 'text'
    if (type !== 'password') return type
    return showPassword ? 'text' : 'password'
  })()

  const eyeIcon = showPassword ? closeEyeIcon : openEyeIcon

  const handleChange = ({ target }) => onChange(target.value)
  const handlePasswordToggle = () => setShowPassword(prevValue => !prevValue)

  return (
    <div className={inputStyles.container}>
      <input type={currentType} placeholder={placeholder} className={inputStyles.input} onChange={handleChange} />
      {
        type === 'password' && (
          <button className={inputStyles.passwordToggleButton} onClick={handlePasswordToggle}>
            <img src={eyeIcon} alt="Toggle Password" className={inputStyles.passwordToggleIcon} />
          </button>
        )
      }
    </div>
  )
}

export default Input
import { useState } from 'react'
import inputStyles from '@styles/input.module.css'
import openEyeIcon from '@/assets/eye/open.svg'
import closeEyeIcon from '@/assets/eye/close.svg'

const Input = ({type, placeholder, value, onInput}) => {
  const [showPassword, setShowPassword] = useState(false)

  const currentType = (() => {
    if (!type) return 'text'
    if (type !== 'password') return type
    return showPassword ? 'text' : 'password'
  })()

  const eyeIcon = showPassword ? closeEyeIcon : openEyeIcon

  const handleInput = ({ target }) => onInput(target.value)
  const handlePasswordToggle = () => setShowPassword(prevValue => !prevValue)

  return (
    <div className={inputStyles.container}>
      <input type={currentType} placeholder={placeholder} value={value} className={inputStyles.input} onInput={handleInput} />
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
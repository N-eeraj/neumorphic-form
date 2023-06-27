import buttonStyles from '@styles/button/toggle.module.css'
import sunIcon from '@/assets/sun.svg'
import moonIcon from '@/assets/moon.svg'

const Toggle = ({theme, onClick}) => {
  const icon = theme === 'dark' ? sunIcon : moonIcon
  const handleThemeToggle = () => onClick(theme === 'dark' ? 'light' : 'dark')

  return (
    <button className={buttonStyles.button} onClick={handleThemeToggle}>
      <img src={icon} alt="Toggle Theme" className={buttonStyles.icon} />
    </button>
  )
}

export default Toggle
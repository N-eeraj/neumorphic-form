import buttonStyles from '@styles/button.module.css'

const Button = ({text, onClick}) => {
  return (
    <button className={buttonStyles.button} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button
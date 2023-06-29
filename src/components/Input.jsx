import inputStyles from '@styles/input.module.css'

const Input = ({type, placeholder}) => {
  return (
    <input type={type || 'text'} placeholder={placeholder} className={inputStyles.input} />
  )
}

export default Input
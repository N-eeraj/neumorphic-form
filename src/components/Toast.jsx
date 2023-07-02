import toastStyles from '@styles/toast.module.css'

const Toast = ({ text, type }) => {
  return (
    <div className={`${toastStyles.toast} ${toastStyles[type]}`}>
        {text}
    </div>
  )
}

export default Toast
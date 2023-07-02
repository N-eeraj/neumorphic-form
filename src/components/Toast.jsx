import { useEffect } from 'react'
import toastStyles from '@styles/toast.module.css'

const Toast = ({ show, text, success, onReset }) => {
  useEffect(() => {
    setTimeout(onReset, 2500)
  }, [show])
  

  return (
    <div className={`${!show && toastStyles.hidden} ${toastStyles.toast} ${toastStyles[success ? 'success' : 'error']}`}>
      {text}
    </div>
  )
}

export default Toast
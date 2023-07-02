import { useEffect } from 'react'
import toastStyles from '@styles/toast.module.css'

const Toast = ({ show, text, success, onReset }) => {
  useEffect(() => {
    let timeout
    if (show)
      timeout = setTimeout(onReset, 2500)
    return () => clearTimeout(timeout)
  })
  

  return (
    <div className={`${!show && toastStyles.hidden} ${toastStyles.toast} ${toastStyles[success ? 'success' : 'error']}`}>
      {text}
    </div>
  )
}

export default Toast
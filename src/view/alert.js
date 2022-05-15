import { useState, useEffect } from 'react'
    
const Alert = ({ variant, message}) => {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false)
    }, 8000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className={`alert alert-${variant}`}>
      {message}
    </div>
  )

}

Alert.defaultPros = {
  variant: 'info',
}

export default Alert;
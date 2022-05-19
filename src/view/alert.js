import { useState, useEffect } from 'react'
    
const Alert = ({ variant, message}) => {
  const d= new Date(); 
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
      {message+ " Quering time ended(ms) is : "+(d.getTime())}
    </div>
  )

}

Alert.defaultPros = {
  variant: 'info',
}

export default Alert;
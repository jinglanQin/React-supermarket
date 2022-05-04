import { useState, useEffect } from 'react'
    
const Alert = ({ variant, message, startTime}) => {
  const [show, setShow] = useState(true)
  const d= new Date(); 
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className={`alert alert-${variant}`}>
      {message+ " Quering time (ms) is : "+(d.getTime()-startTime)}
    </div>
  )

}

Alert.defaultPros = {
  variant: 'info',
}

export default Alert;
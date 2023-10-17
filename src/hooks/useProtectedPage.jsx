import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { goToLogin } from '../routes/coordenatior'

const useProtectedPage = () => {
  const history = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      goToLogin(history)
    }
  }, [history])
}

export default useProtectedPage
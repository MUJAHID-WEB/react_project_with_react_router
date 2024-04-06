import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
      navigate('/')
    }, 1000)
  },[])
  
  return (
    <div>NotFound</div>
  )
}







// export default function NotFound() {
//   return <Navigate to='/' />
// }
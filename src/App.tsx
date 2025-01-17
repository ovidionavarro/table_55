import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
  fetch('https://randomuser.me/api?results=100')
  .then(async resp=> await resp.json())
  .then(resp=>{setUsers(resp.results)}) 
  .catch(err=>{
    console.log(err)
  })   
    
  }, [])
  

  return (
    <>
      {JSON.stringify(users)}
    </>
  )
}

export default App

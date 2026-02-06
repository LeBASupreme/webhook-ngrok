import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Deployed React App</h1>
      <h2>React is the best framework</h2>
      <p>
        Hello world! This is a deployed React app. You can trigger a redeploy by pushing to the main branch of the connected GitHub repository. Check the server logs for details.
      </p>
      
    </>
  )
}

export default App

import './App.css'
import { useState } from 'react'

function App() {


  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className='App'>
      <section className='useState'>
        <h1>UseState</h1>

        <p>{count}</p>
        <button onClick={handleClick}>+</button>
      </section>

    </div>
  )
}

export default App

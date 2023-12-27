import './App.css'
import { useContext, useEffect, useState } from 'react'
import context from './main'

function App() {

  const [count, setCount] = useState(0)
  const info = useContext(context)

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {

    console.log("Hello Hooks")
  }, [count])

  return (
    <div className='App'>
      {/* useState, useEffect */}
      <section>
        <h1>useState, useEffect</h1>

        <p>{count}</p>
        <button onClick={handleClick}>+</button>
      </section>
      {/* useState, useEffect */}
      <hr />
      {/* useContext */}
      <section>
        <h1>useContext</h1>
        <p>{info.name}</p>
        <p>{info.age}</p>
      </section>
      {/* useContext */}


    </div>
  )
}

export default App

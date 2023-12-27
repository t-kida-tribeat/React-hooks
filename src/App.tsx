import './App.css'
import { useContext, useEffect, useState, useRef } from 'react'
import context from './main'

function App() {

  const [count, setCount] = useState(0)
  const info = useContext(context)
  const ref = useRef(null)

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {

    console.log("Hello Hooks")
  }, [count])

  const handleRef = () => {
    console.log(ref)
  }

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
        <p>
          親コンポーネントから子孫コンポーネントに値を渡すときに使う。<br />
          propsでも渡せるが親から孫に渡すときにはpropsを何回も渡さなければならない。<br />
          そのため、useContextを使うと親から孫に値を渡すことができる。
        </p>
      </section>
      {/* useContext */}
      <hr />
      {/* useRef */}
      <section>
        <h1>useRef</h1>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>ref</button>
        <p>
          inputタグの情報を取得するときに使う。<br />
        </p>
      </section>
      {/* useRef */}


    </div>
  )
}

export default App

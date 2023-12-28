import './App.css'
import { useContext, useEffect, useState, useRef, useReducer } from 'react'
import context from './main'

const reducer = (state:number, action:{type:string}) => {
  switch (action.type) {
    case 'increment':
      return state + 10
    case 'decrement':
      return state - 5
    default:
      return state
  }
}

function App() {

  const [count, setCount] = useState(0)
  const info = useContext(context)
  const ref = useRef(null)
  const [state, dispatch] = useReducer(reducer, 0)

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
        <p>
          useStateは関数コンポーネントで状態を管理するために使う。<br />
          useEffectは第二引数に空の配列を指定した場合初回レンダリング時のみ実行されます。 第二引数の配列に 1 つ以上の値が指定されている場合渡された値がレンダリング前後で変更がなければ処理をスキップし、再レンダリング後に変更していれば実行します。

        </p>
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
        {/* <p ref={ref}>aaaaa</p> */}
        <button onClick={handleRef}>ref</button>
        <p>
          タグの情報を取得するときに使う。<br />
        </p>
      </section>
      {/* useRef */}
      <hr />
      {/* useReducer */}
      <section>
        <h1>useReducer</h1>

        <p>カウント：{state}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>


        <p>
          inputタグの情報を取得するときに使う。<br />
        </p>
      </section>
      {/* useReducer */}


    </div>
  )
}

export default App

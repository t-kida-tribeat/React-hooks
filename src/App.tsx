import './App.css'
import { useContext, useEffect, useState, useRef, useReducer, useMemo, useCallback } from 'react'
import context from './main'
import SomeChild from './SomeChild'
import useLocalStorage from './useLocalStorage'

const reducer = (state: number, action: { type: string }) => {
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

  // useMemo→値のメモ化
  const [count01, setCount01] = useState(0)
  const [count02, setCount02] = useState(0)

  // const square = () => {
  //   let i = 0
  //   while (i < 2000000000) {
  //     i++
  //   }
  //   return count02 * count02
  // }
  const square = useMemo(() => {
    let i = 0
    while (i < 2000000000) {
      i++
    }
    return count02 * count02
  }, [count02])


  // useCallBack->関数のメモ化
  const [counter, setCounter] = useState(0)

  // const showCount = ()=>{
  //   alert(`これは重い処理です。`)
  // }
  const showCount = useCallback(() => {
    alert(`これは重い処理です。`)
  }, [counter])

  // カスタムフック
  const [age, setAge] = useLocalStorage('age', 24)

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
          基本的にはReactのパフォーマンスを上げるもの
        </p>

      </section>
      {/* useReducer */}
      {/* useMemo */}
      <section>
        <h1>useMemo</h1>
        <div>カウント1：{count01}</div>
        <div>カウント2：{count02}</div>
        <div>結果：{square}</div>
        <button onClick={() => setCount01(count01 + 1)}>+</button>
        <button onClick={() => setCount02(count02 + 1)}>+</button>
        <p>
          メモ化することができる。<br />
          メモ化とはブラウザのメモリに値を保存することができる。<br />
          useMemoを使わないと関係のないuseStateの値が変わるたびにsquare関数が実行される。<br />
          useMemoを使って関数をラッピングすることで依存関係がある値が更新されたときだけ実行されるようになる。<br />
          今回の場合だとcount02の値が更新されたときだけsquare関数が実行されるようになる。<br />
          基本的にはReactのパフォーマンスを上げるもので使い所は難しい。おそらく大規模なアプリケーションを作るときにパフォーマンスが悪かったら毎回実行されなくても良い重たい処理に使う。<br />
          useMemoを使いすぎるのも良くないので注意が必要。useMemoはメモリの保存するのでメモリを食いすぎるとアプリケーションが重くなる。<br />
        </p>
      </section>
      {/* useMemo */}
      {/* useCallBack */}
      <section>
        <h1>useCallBack</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <SomeChild showCount={showCount} />
        <p>
          依存する値が変わったときだけ関数を実行する。<br />
          親コンポーネントが更新されると子コンポーネントも更新される。useCallBackを活用すると子コンポーネントが更新されないようにすることができる。<br />
          useMemoと同様でパフォーマンスを上げるために使う。<br />
        </p>
      </section>
      {/* useCallBack */}
      {/* カスタムフック */}
      <section>
        <h1>カスタムフック</h1>
        <p>{age}</p>
        <button onClick={() => { setAge(40) }}>年齢をセット</button>

        <p>
          Hooksを自作できる。<br />
          今回はuseLocalStorageというカスタムフックを作成した。<br />
        </p>
      </section>
      {/* カスタムフック */}



    </div>
  )
}

export default App

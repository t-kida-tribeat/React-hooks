import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const info = {
  name: 'yukiice',
  age: 18
}

const context = createContext(info)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <context.Provider value={info}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </context.Provider>

)

export default context;

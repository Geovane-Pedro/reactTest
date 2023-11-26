import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  let atual = count < 0 ? 'Contagem abaixo de zero!' : count
  return (
    <>
      <h1>TechReact Energy</h1>
      <div className="card">
        <p>Consumo atual <span data-testid="atualConsumo">{atual}</span>kWh</p>
        <button onClick={() => setCount((count) => count + 50)}>
          Aumentar consumo!
        </button>
        <button onClick={() => count < 0 ? count : setCount((count) => count - 50)}>
          Diminuir consumo!
        </button>
      </div>
    </>
  )
}
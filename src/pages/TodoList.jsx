import '../App.css';
import {useState} from 'react'

function Task() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  function input(event) {
    setInputValue(event.target.value)
  }

  function buttonClick() {
    setTasks([...tasks, inputValue])
  }

  return (
    <div>
      <header>Lista de tarefas</header>
      <div className='container'>
        <form>
          <input placeholder="Digite sua tarefa.." onChange={input}/>
          <button type="reset" onClick={buttonClick}>Adicionar</button>
        </form>
        <ul>
          {
            tasks.map((item, index)=> (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Task;
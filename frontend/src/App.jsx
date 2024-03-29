import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoCreate } from './components/TodoCreate'
import { Todos } from './components/Todos'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  // we used useEffect hook here

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json()
      setTodos(json.todos)
    })
  },[])

  return (
    <div>
      <TodoCreate></TodoCreate>
      <Todos todos={todos}></Todos>
     
    </div>
  )
}

export default App

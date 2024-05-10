import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoCreate } from './components/TodoCreate'
import { Todos } from './components/Todos'
import { useEffect } from 'react'
import { Background } from './components/Background'
import { Foreground } from './components/Foreground'

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
    <div className="relative w-full h-screen bg-zinc-800">
      {/* <TodoCreate></TodoCreate>
      <Todos todos={todos}></Todos> */}
     <Background/>
     <Foreground todos={todos}></Foreground>
    </div>
  )
}

export default App

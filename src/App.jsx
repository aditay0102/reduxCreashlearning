import { useState } from 'react'
import './App.css'

import AddTodo from './components/AddTodo.jsx'
import Todo from './components/Todo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      Learning redux
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App

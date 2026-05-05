import { useState } from 'react'
import './App.css'
import Heading from './components/Heading';
import ToDoList from './components/ToDoList';
import { list } from './utils/mockData';

function App() {
  const [todo,setToDo] = useState(list);
  return (
    <div>
      <Heading />
      <ToDoList listData= {todo} setToDo = {setToDo} />
      <br />
    </div>
  )
}

export default App;

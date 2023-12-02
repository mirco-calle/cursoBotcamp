import { useState } from 'react'
import './App.css'
import Greeting from "./componentes/pure/forms/greeting"
import TaskListComponent from './componentes/container/task_list'
function App() {

  return (
    <>
      <header>
        {/*Componente de listado de tareas*/}
        {/* para subir denuevo*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </>
  )
}

export default App

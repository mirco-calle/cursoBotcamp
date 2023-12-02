import React from 'react'
import { Task } from "../../models/task.class"
import TaskComponent from '../pure/forms/task';
import { LEVELS } from '../../models/levels.enum';


function TaskListComponent() {

    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);

    const changeState = () => {
        console.log("TODO: cambiar estado de una tarea");
    }


    return (
        <div>
            <div>
                Your Tasks :

            </div>
            {/*TODO: Aplicar un For/Map para renderizar un a lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}



export default TaskListComponent

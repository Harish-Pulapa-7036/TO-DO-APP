import React, { useState } from "react";
import "./form.css"
const Todo=()=>{
    const [todo,settodo]=useState('')
    const [todos,settodos]=useState([])
    const [editid,seteditid]=useState(0)
    const handleclick=(e)=>{
        e.preventDefault();
        if(editid){
            const edit=todos.find((i)=> i.id ===editid)
            const updatedtodo=todos.map((t)=>
                t.id === edit.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
                
            );
            settodos(updatedtodo);
            seteditid(0);
            settodo('');
            return;
        }
        if(todo != ''){
            settodos([{id:`${todo}-${Date.now()}`,todo:todo},...todos])
            settodo('')
        }
        console.log(todos)

    }


    const handledelete=(id)=>{
        let deleteto =todos.filter((to)=> to.id!==id)
        settodos([...deleteto])
    }
    const handleedit=(id)=>{
        let edittodo=todos.find((event)=> event.id === id)
        settodo(edittodo.todo)
        seteditid(id)
    }

    return (
        <div className="container">
            <h1>Todo List App</h1>
            <form className="todoform" onSubmit={handleclick}>
                <input type="text" value={todo} onChange={(e)=>{settodo(e.target.value)}}/>
                <button type="submit">{editid?'OK':'Add ToDo'}</button>
            </form>
            <ul className="ullist">
                {
                    todos.map((e)=>{
                        return (
                        <li className="lilist" key={e.id}>
                            <span className="todotext" >{e.todo}</span>
                             <button onClick={()=>{handleedit(e.id)}}>Edit</button>
                            <button onClick={()=>{handledelete(e.id)}}>Delete</button>
                         </li>
                        )
                    })
                }
                
                
            </ul>
            
        </div>
    )
}
export default Todo;
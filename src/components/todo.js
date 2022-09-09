import React, {useState} from "react";

export default function ToDo() {
    const [tarefas, setTarefas] = useState("")
    const [lista, setLista] = useState([])
    const tarefa = {tarefa: tarefas, id: Date.now()}

    const remove = (id) => {
        setLista(lista.filter((item) =>{
          return item.id !== id
        }))
    } 
    return(
        <div>
            <h1>To Do</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input value={tarefas} onChange={(e) => {setTarefas(e.target.value)}} placeholder="Write your task" type="text" />
                <button onClick={() => {
                    if (tarefas !== "") {
                        setLista([...lista, tarefa])
                        setTarefas('')
                    }
                }}>Send</button>
                {lista.map((item, index) => (
                    <div key={index}>
                        <ul>
                            <li id={item.id}>{item.tarefa}</li>
                            <button onClick={() => {remove(item.id)}}>X</button>
                        </ul>
                    </div>
                ))}     
            </form>            
        </div>
    )
}
import React, {useState} from "react"

export default function App() {
  const [nome, setNome] = useState("ToDo")

  return(
    <div>
      <h1>{nome}</h1>
    </div>
  )
}

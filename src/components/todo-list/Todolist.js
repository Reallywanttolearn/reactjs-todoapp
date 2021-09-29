import './todolist.css'

const Todolist = (props) => {
  console.log(props.dataTodo);
    return (
        <ul>{
            props.dataTodo.map((todo)=>{
                return <li key={todo.id} > {todo.title} </li>
            }
            )}
        </ul>
    )
}

export default Todolist
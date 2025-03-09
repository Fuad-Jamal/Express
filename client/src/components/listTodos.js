import React,{Fragment,useEffect,useState} from 'react'
import { EditTodo } from './editTodo';

const ListTodos = () => {
    const [todos, setTodos] = useState([])

    const deleteTodo = async(id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todoo/${id}`, {
                method: 'DELETE'
            })
            setTodoos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    const getTodo = async() => {
        try {
            const response = await fetch('http://localhost:5000/todoo')
            let data = await response.json()
            setTodos(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTodo();
    }, [])

    return (
        <>
        {" "}
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/*}
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      */}
    {todos.map(todo => (
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo /></td>
            <td><button className='btn btn-danger' onClick={()=> deleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
    ))}
    </tbody>
  </table>
        </>
    );
}

export default ListTodos;
import React,{useState} from 'react';

const EditTodo = ({todo}) => {

    const [description, setDescription] = useState(todo.description)

    const updateDescription = async(e) => {
        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch (`http://localhost:5000/todoo/${todo.todo_id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            window.location = '/';
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
 Edit
</button>
<div class="modal" id={`id${todo.todo_id}`} onClick={()=> setDescription(todo.descriptio)}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={()=> setDescription(todo.descriptio)}></button>
      </div>
      <div class="modal-body">
        <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal" onClick={e =>updateDescription(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=> setDescription(todo.descriptio)}>Close</button>
      </div>

    </div>
  </div>
</div>
        </>
    );
}

export default EditTodo;
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, changeStatus } from "../features/todoSlice";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { FaSave } from "react-icons/fa";

const Todo = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleChangeStatus = (id) => {
        dispatch(changeStatus(id));
    }

    const handleEdit = () => {
        dispatch(editTodo({ id: todo.id, text: newText }))
        setIsEditing(false);
    }

    return (
        <div className={`border border-violet-400 mb-5 text-2xl p-4 rounded-xl shadow-xl ${todo.isCompleted ? 'bg-green-100' : 'bg-red-100'}`}>
            <div className="flex justify-between items-center">

                {
                    isEditing ?
                        <input type="text" onChange={e => setNewText(e.target.value)} value={newText} className="border bg-white p-2" />
                        : <p onClick={() => handleChangeStatus(todo.id)}>{todo.text}</p>
                }

                <div className="flex gap-3">
                    {
                        isEditing ? 
                        <button type="button" className="bg-green-400 rounded p-2 cursor-pointer" onClick={handleEdit}><FaSave /></button>
                        : <button type="button" className="bg-yellow-500 rounded p-2 cursor-pointer" onClick={() => setIsEditing(true)}><MdEditSquare /></button>
                    }
                    <button type="button" className='bg-red-400 px-2 rounded cursor-pointer' onClick={() => handleDelete(todo.id)}
                    ><MdDeleteForever /></button>
                </div>
            </div>
        </div>
    )
}

export default Todo
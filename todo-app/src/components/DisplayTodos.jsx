import { useContext } from "react"
import TodoContext from "../context/TodoContext"

const DisplayTodos = () => {

    const { allTodos, setAllTodos } = useContext(TodoContext);

    const handleDelete = (index) => {
        setAllTodos(allTodos.filter((todo, i) => index != i))
    }

    const handleChangeStatus = (index) => {
        setAllTodos(allTodos.map((todo, i) => {
            if (i == index) {
                // change status
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            } else {
                return todo;
            }
        }))
    }

    return (
        <div>
            {
                allTodos.length > 0 ?
                    allTodos.map((todo, index) => <div key={index}
                        className={`border border-violet-400 mb-3 text-2xl p-4 rounded-xl shadow-xl ${todo.isCompleted ? 'bg-green-100' : ''}`}>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className="cursor-pointer" onClick={() => handleChangeStatus(index)}>{todo.text}</p>
                                <small>Status: {todo.isCompleted? 'Completed': 'Pending'}</small>
                            </div>


                            <button type="button" className='bg-red-400 px-2 rounded-xl flex justify-center items-center' onClick={() => handleDelete(index)}>x</button>
                        </div>
                    </div>)
                    : <div className="text-center text-xl text-blue-400">No Todos to display</div>
            }
        </div>
    )
}

export default DisplayTodos
import { useSelector } from "react-redux"

const Navbar = () => {

    const allTodos = useSelector(state => state.todo.value);

    const completedTodos = allTodos.filter(todo => todo.isCompleted);

    return (
        <nav className='flex justify-between items-center text-2xl bg-slate-700 text-white p-4 px-20'>
            <div>All Todos: {allTodos.length}</div>
            <div>Completed: {completedTodos.length}</div>
        </nav>
    )
}

export default Navbar
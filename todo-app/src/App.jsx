import { useState } from 'react';
import TodoApp from './components/TodoApp'
import TodoContext from './context/TodoContext';


const App = () => {

    const [allTodos, setAllTodos] = useState([
        {
            text: 'Goto Market',
            isCompleted: false,
        },
    ]);

    return (
        <TodoContext.Provider value={{ allTodos, setAllTodos }}>
            <TodoApp />
        </TodoContext.Provider>
       
    )
}

export default App
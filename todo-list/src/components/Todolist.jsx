import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

const Todolist = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!title.trim()) return;
    const newTodo = {
      _id: Date.now().toString(),
      title: title
    };
    console.log(title, todos);
    setTodos(prev => [...prev, newTodo]);
    setTitle("");
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo._id !== id));
  }

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
    console.log("logout");
  }

  return (
    <div>
<Navbar />
    
    <div className='flex items-center justify-center h-screen bg-violet-400 p-4'>
      <div className='bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md'>
        <h2 className='text-3xl font-bold text-center mb-8'>Todolist</h2>

        <div className='flex gap-2 mb-6'>
          <input type="text" placeholder='Enter Todo' value={title} className='w-full px-4 py-2 border border-gray-300 rounded-lg'
            onChange={(e) => { setTitle(e.target.value) }}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()} />
          <button className='bg-orange-400 hover:bg-sky-500 text-white font-bold py-2 px-6 rounded-lg' onClick={addTodo}>Add</button>
        </div>

        <div className='flex flex-col gap-3'>
          {todos?.map((todo) => (
            <div key={todo._id} className='flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100'>
              <span className='font-medium text-gray-700'>{todo.title}</span>
              <button className='bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-900 transition-colors' onClick={() => deleteTodo(todo._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <button className='flex bg-red-500 justify-center items-center font-bold m-2' onClick={logout}>Logout</button>
      </div>
    </div>
    </div>


  )
}

export default Todolist
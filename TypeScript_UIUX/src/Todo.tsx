import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todo.css'; // Ensure you import the CSS file

interface Todo {
    id: number;
    name: string;
    status: 'complete' | 'incomplete';
}

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoName, setNewTodoName] = useState('');
    const [newTodoStatus, setNewTodoStatus] = useState<'complete' | 'incomplete'>('incomplete');

    useEffect(() => {
        axios.get('http://localhost:3001/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error('There was an error!', error));
    }, [todos]);

    const addTodo = () => {
        if (newTodoName.trim()) {
            axios.post('http://localhost:3001/todos', { name: newTodoName, status: newTodoStatus })
                .then(response => {
                    setTodos([...todos, response.data]);
                    setNewTodoName(''); // Clear input after adding
                })
                .catch(error => console.error('There was an error!', error));
        }
    };

    const deleteTodo = (id: number) => {
        axios.delete(`http://localhost:3001/todos/${id}`)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)))
            .catch(error => console.error('There was an error!', error));
    };

    return (
        <div className="todo-container">
            <h2>Todo List</h2>
            <div className="todo-input">
                <input
                    type="text"
                    placeholder="New Todo"
                    value={newTodoName}
                    onChange={(e) => setNewTodoName(e.target.value)}
                />
                <select
                    value={newTodoStatus}
                    onChange={(e) => setNewTodoStatus(e.target.value as 'complete' | 'incomplete')}
                >
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                </select>
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div className="todo-list">
                {todos.map((todo,index) => (
                    <div key={todo.id} className={`todo-card ${todo.status}`}>
                        <h3 className="todo-name">{todo.name}</h3>
                        <p className="todo-status">{todo.status}</p>
                        <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;

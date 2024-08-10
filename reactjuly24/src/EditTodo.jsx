import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo } from "./actions/todoactions";

const EditTodo = () => {
  const { index } = useParams();
  const todos = useSelector((state) => state.todos.todos);
  const todo = todos[Number(index)];

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setStatus(todo.status);
    }
  }, [todo]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ index: Number(index), updatedTodo: { name, status } }));
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Todo Name"
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Todo Status"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditTodo;

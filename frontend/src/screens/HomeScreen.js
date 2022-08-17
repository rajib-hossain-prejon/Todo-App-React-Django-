import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const { data } = await axios.get('http://127.0.0.1:8000/api/todos/');
      setTodos(data);
    }

    fetchTodos();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/todos/${id}/`)
      .then(() => {
        const newTodos = todos.filter((t) => {
          return t.id != id;
        });
        setTodos(newTodos);
      })
      .catch(() => alert('something went wrong'));
  };

  const handleUpdate = async (id, value) => {
    return axios
      .patch(`http://127.0.0.1:8000/api/todos/${id}/`, value)
      .then((res) => {
        const { data } = res;

        const newTodos = todos.map((t) => {
          if (t.id === id) {
            return data;
          }
          return t;
        });
        setTodos(newTodos);
      })
      .catch(() => {
        alert('Something went wrong');
      });
  };

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos}></TodoForm>
      <ListGroup as='ul' className='m-4'>
        {todos.map((todo) => {
          return (
            <TodoList
              todo={todo}
              setTodo={setTodos}
              key={todo.id}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            ></TodoList>
          );
        })}
      </ListGroup>
      <>
        {/* <Button variant='primary' onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button> */}
      </>
    </div>
  );
};

export default HomeScreen;

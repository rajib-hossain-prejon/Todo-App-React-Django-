import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const TodoForm = ({ todos, setTodos }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please provide a valid value for todo');
      return;
    }

    axios
      .post('http://127.0.0.1:8000/api/todos/', {
        name: name,
      })
      .then((res) => {
        setName('');
        const { data } = res;
        setTodos([...todos, data]).catch(() => {
          alert('Something went wrong');
        });
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='my-4'>
          <Form.Control
            placeholder='Add New Todo'
            onChange={handleChange}
            value={name}
          />
          <div className='d-grid gap-2'>
            <Button
              variant='outline-secondary'
              id='button-addon2'
              type='submit'
              size='lg'
              className='px-5'
            >
              Add
            </Button>
          </div>
        </InputGroup>
      </Form>
    </div>
  );
};

export default TodoForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdEdit,
  MdDelete,
} from 'react-icons/md';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TodoList = ({ todo, setTodos, handleUpdate, handleDelete }) => {
  const [show, setShow] = useState(false);
  const [record, setRecord] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setRecord(todo);
    setShow(true);
  };
  const handleChange = (e) => {
    setRecord({
      ...record,
      name: e.target.value,
    });
  };

  const handleSaveChanges = async () => {
    await handleUpdate(record.id, { name: record.name });
    handleClose();
  };

  return (
    <div>
      <ListGroup.Item
        as='li'
        variant={todo.completed === true ? 'success' : 'danger'}
        className='my-2 d-flex justify-content-between align-items-center'
      >
        <div className='d-flex justify-content-center'>
          <span
            style={{ marginRight: '12px', cursor: 'pointer' }}
            onClick={() => {
              handleUpdate(todo.id, { completed: !todo.completed });
            }}
          >
            {todo.completed === true ? (
              <MdCheckBox
                style={{
                  color: 'green',
                }}
              ></MdCheckBox>
            ) : (
              <MdCheckBoxOutlineBlank
                style={{
                  color: 'green',
                }}
              ></MdCheckBoxOutlineBlank>
            )}
          </span>
          <span>{todo.name}</span>
        </div>
        <div>
          <MdEdit
            style={{
              cursor: 'pointer',
              marginRight: '12px',
              color: 'black',
            }}
            onClick={handleShow}
          ></MdEdit>
          <MdDelete
            style={{
              cursor: 'pointer',
              color: 'red',
            }}
            onClick={() => {
              handleDelete(todo.id);
            }}
          ></MdDelete>
        </div>
      </ListGroup.Item>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>EditTodo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              value={record ? record.name : ''}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default TodoList;

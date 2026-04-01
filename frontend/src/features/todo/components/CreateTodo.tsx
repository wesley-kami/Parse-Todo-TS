import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { todoSchema, type TodoType } from '../schemas/todo.schema';

const CreateTodo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(todoSchema)
  });

    const onSubmit: SubmitHandler<TodoType> = (todoFormData) => {
        console.log(todoFormData);
    } 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                {...register("title")}
                type="text"
                placeholder="Workout"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="description"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                {...register('description')}
                />
            </Form.Group>
            <Form.Select
                aria-label="Default select example" 
                {...register("status")}
            >
                <option>Status</option>
                <option value="On-hold">On hold</option>
                <option value="In-progress">In progress</option>
                <option value="Done">Done</option>
            </Form.Select>
            <button type='submit'>save</button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateTodo;
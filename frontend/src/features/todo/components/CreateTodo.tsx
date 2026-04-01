import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { todoSchema, type TodoType } from '../schemas/todo.schema';
import { useTodo } from '../api/useTodo';

interface TodoForm {
  isVisible: boolean
}

const CreateTodo = ({ isVisible }: TodoForm ) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(todoSchema)
  });

  useEffect(() => {
    isVisible ? handleShow() : handleClose();
  }, [isVisible])

  const { create: { mutate } } = useTodo();

    const onSubmit: SubmitHandler<TodoType> = async (todoFormData) => {
          await mutate(todoFormData);
          reset();
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
                type="text"
                placeholder="Workout"
                autoFocus
                {...register("title")}
              />
              <span>{errors?.title?.message}</span>
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
                <span>{errors?.description?.message}</span>
            </Form.Group>
            <Form.Select
                aria-label="Default select example" 
                {...register("status")}
            >
                <option disabled>Status</option>
                <option value="On-hold">On hold</option>
                <option value="In-progress">In progress</option>
                <option value="Done">Done</option>
            </Form.Select>
            <Button variant="primary" type='submit'>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateTodo;
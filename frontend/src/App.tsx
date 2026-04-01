import { Container } from "react-bootstrap";
import CreateTodo from "./features/todo/components/CreateTodo"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Container style={{
        backgroundColor: "red"
      }}>
        <CreateTodo />
      </Container>
    </>
  )
}

export default App

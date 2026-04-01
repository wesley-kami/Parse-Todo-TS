import { Container } from "react-bootstrap";
import CreateTodo from "./features/todo/components/CreateTodo"
import Todos from "./features/todo/components/Todos";

function App() {

  return (
    <>
      <Container className="mb-4">
        <CreateTodo isVisible={false} />
        <Todos />
      </Container>
    </>
  )
}

export default App

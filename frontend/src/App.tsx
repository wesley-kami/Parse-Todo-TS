import { Container } from "react-bootstrap";
import CreateTodo from "./features/todo/components/CreateTodo"

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

import { Button, Row } from "react-bootstrap";
import { useTodo } from "../api/useTodo"
import { FaRegTrashAlt } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";


const Todos = () => {

  const { fetchAll: { data, isPending } } = useTodo();
  
  return (
    <div>{isPending ? (
      <p>Chargement...</p>)
      : (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(todo => {
            return (
              <>
                <td>{todo.get("id")}</td>
                <td>{todo.get("title")}</td>
                <td>{todo.get("description")}</td>
                <td>{todo.get("status")}</td>
                <td>
                  <Row>
                    <Button><BiSolidEdit /></Button>
                    <Button><FaRegTrashAlt /></Button>
                  </Row>
                </td>
              </>
            )
          })}
        </tbody>
      </table>)}
    </div>
  )
}

export default Todos

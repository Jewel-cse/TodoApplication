import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";

export default function ListTodosComponent() {
  //const today = new Date();
  // const targetDate = new Date(
  //   today.getFullYear() + 12,
  //   today.getMonth(),
  //   today.getDay()
  // );

  // const todos = [
  //   {
  //     id: 101,
  //     description: "Learn AWS",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   {
  //     id: 102,
  //     description: "Learn Spring",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   {
  //     id: 103,
  //     description: "Learn DevOps",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   {
  //     id: 104,
  //     description: "Learn Security",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  // ];

  //this is for bring data from back-end
  const [todos, setTodos] = useState([]);
  useEffect(() => {refreshTodos()},[])
  function refreshTodos() {
    retrieveAllTodosForUsernameApi('jewel')
      .then((response) => {setTodos(response.data)})
      .catch((error) => console.log(error));
  }

  //delete a todo 
  const [deleteMessage, setDeleteMessage] = useState(null);
  function deleteTodo(id) {
    console.log("clicked delete buton- " + id);
    deleteTodoApi('jewel', id)
      .then(() => {
        //1.show message that successful delete
        //2.update todos
        setDeleteMessage(`Delete of Todo with id ${id} successfull`);
        refreshTodos();
      })
      .catch()
  }
  return (
    <div className="container">
      <h2>Things you want to Do</h2>
      {deleteMessage && (
        <div className="alert alert-warning">{deleteMessage}</div>
      )}
      <div>
        <table className="table">
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>Description</th>
              <th>Is Done</th>
              <th>Target Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  {/* <td>{todo.id}</td> */}
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  {/* <td>{todo.targetDate.toDateString()}</td> */}
                  <td>
                    <button
                      className="btn btn-warning "
                      onClick={() => deleteTodo(todo.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

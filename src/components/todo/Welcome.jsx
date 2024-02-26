import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function WellcomeComponent() {
  const { username } = useParams();
  function callHelloWorlAPI() {
    console.log("Clicked !!!")
    axios.get("http://localhost:8080/hello-world-bean")
      .then((response) => successfulResponse(response))
      .catch((error)=>errorResponse(error))
      .finally(()=>console.log("Clean Up"));
  }
  function successfulResponse(response) {
    console.log(response);
  }
  function errorResponse(error) {
    console.log(error);
  }
  return (
    
    <div>
      <h2>Wellcome Mr. {username}</h2>
      <div className="Wellcome">
        Manage your todos-<Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorlAPI}>Call Hello World REST API</button>
      </div>
    </div>
  );
}

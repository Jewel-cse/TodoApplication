import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {retrieveHelloWorldBean} from "./api/HelloWorldAPIService";
export default function WellcomeComponent() {
  const { username } = useParams();
  const [message, setMessage] = useState();
  
  function callHelloWorlAPI() {
    console.log("Clicked !!!");
    retrieveHelloWorldBean()
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("Clean Up"));
  }
  
  function successfulResponse(response) {
    console.log(response);
    setMessage(response.data.message);
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
        <button className="btn btn-success m-5" onClick={callHelloWorlAPI}>
          Call Hello World REST API
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}

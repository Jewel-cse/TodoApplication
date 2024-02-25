import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

export default function LoginComponent() {
  const [username, setUsername] = useState("jewel");
  const [password, setPassword] = useState();
  const [showFailedMessage, setShowFailedMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (authContext.login(username,password)) {
      navigate(`/welcome/${username}`); //please mark the tika sign instead of qutation
    } else {
      setShowFailedMessage(true);
    }
  }

  return (
    <div className="Login">
      
      {showFailedMessage && (
        <div className="failedMessage">
          Authentication failed,please check your credentials
        </div>
      )}

      <div className="LogingForm">
        <h2>Please login </h2>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}

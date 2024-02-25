import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [username, setUsername] = useState("jewel");
  const [password, setPassword] = useState();
  const [showSuccedMessage, setShowSuccedMessage] = useState(false);
  const [showFailedMessage, setShowFailedMessage] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    //console.log(event.target.value)
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    //console.log(event.target.value)
    setPassword(event.target.value);
  }

  function handleSubmit() {
    console.log(username);
    console.log(password);

    if (username === "jewel" && password === "1234") {
      console.log("succeed");
      setShowSuccedMessage(true);
      setShowFailedMessage(false);
      navigate(`/welcome/${username}`); //please mark the tika sign instead of qutation
    } else {
      console.log("failed");
      setShowSuccedMessage(false);
      setShowFailedMessage(true);
    }
  }

  return (
    <div className="Login">
      {showSuccedMessage && (
        <div className="successMessage">Authenticated successfully</div>
      )}
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

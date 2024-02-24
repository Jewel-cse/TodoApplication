import { useState } from "react";
import "./TodoApp.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />}></Route>
                    <Route path="/login" element={<LoginComponent />}></Route>
                    <Route path="/welcome" element={<WellcomeComponent />}></Route>
                </Routes>
            </BrowserRouter>
            {/* <LoginComponent></LoginComponent> */}
            {/* <WellcomeComponent></WellcomeComponent> */}
        </div>
    );
}

export function LoginComponent() {
    const [username, setUsername] = useState();
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
            navigate('/welcome');
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

export function WellcomeComponent() {
    return <div className="Wellcome">Wellcome component</div>;
}

import { useState } from "react";
import "./TodoApp.css";
import { BrowserRouter, Routes, Route, useNavigate,useParams } from "react-router-dom";
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />}/>
                    <Route path="/login" element={<LoginComponent />}/>
                    <Route path="/welcome/:username" element={<WellcomeComponent />}/>
                    <Route path="/todos" element={<ListTodosComponent />}/>
                    
                    <Route path="*" element={<ErrorComponent />}/>
                </Routes>
            </BrowserRouter>
            {/* <LoginComponent></LoginComponent> */}
            {/* <WellcomeComponent></WellcomeComponent> */}
        </div>
    );
}

export function LoginComponent() {
    const [username, setUsername] = useState('jewel');
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
            navigate(`/welcome/${username}`);    //please mark the tika sign instead of qutation
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

export function WellcomeComponent() {
    const {username} = useParams();
    return (
      <div>
        <h2>wellcome Mr. {username}</h2>
        <div className="Wellcome">Wellcome component</div>
      </div>
    ); 
}
export function ErrorComponent() {
    return (
        <div>
            <h2>Your effort is uncompareable</h2>
            <div className="errorPage">404 page not found!!</div>
        </div>

    );
}

export function ListTodosComponent() {
    const todos = [
      { id: 101, description: "Learn AWS" },
      { id: 102, description: "Learn Spring" },
      { id: 103, description: "Learn DevOps" },
      { id: 104, description: "Learn Security" },
    ];
    return (
        <div>
            <h2>Things you want to Do</h2>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr> 
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
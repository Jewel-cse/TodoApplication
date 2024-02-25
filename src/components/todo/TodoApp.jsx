import "./TodoApp.css";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import LoginComponent from "./Login";
import LogoutComponent from "./Logout";
import WellcomeComponent from "./Welcome";
import ErrorComponent from "./Error";
import ListTodosComponent from "./ListTodos";
import AuthProvider from "../security/AuthContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome/:username" element={<WellcomeComponent />} />
            <Route path="/todos" element={<ListTodosComponent />} />
            <Route path="/logout" element={<LogoutComponent />} />

            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

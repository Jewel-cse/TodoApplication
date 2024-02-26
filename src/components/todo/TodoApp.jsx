import "./TodoApp.css";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import LoginComponent from "./Login";
import LogoutComponent from "./Logout";
import WellcomeComponent from "./Welcome";
import ErrorComponent from "./Error";
import ListTodosComponent from "./ListTodos";
import AuthProvider, { useAuth } from "./security/AuthContext";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
export default function TodoApp() {

  function AuthenticatedRoute({ children }) {
    const authContext = useAuth()
    if (authContext.isAuthenticated) {
      return children ;
    }
    return <Navigate to="/"/>
  }

  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome/:username" element={
              <AuthenticatedRoute>
                <WellcomeComponent />
              </AuthenticatedRoute>
            } />
            <Route path="/todos" element={
              <AuthenticatedRoute>
                <ListTodosComponent />
              </AuthenticatedRoute>
            } />
            <Route path="/logout" element={
              <AuthenticatedRoute>
                <LogoutComponent />
              </AuthenticatedRoute>
            } />

            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

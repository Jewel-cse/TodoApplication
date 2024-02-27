import axios from "axios";


const apiClient = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
);

//retrive all the todos for a specific users
export const retrieveAllTodosForUsernameApi =
    (username) => apiClient.get(`/users/${username}/todos`);
    
//retrive all the todos for a specific users
export const deleteTodoApi =
    (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);
    
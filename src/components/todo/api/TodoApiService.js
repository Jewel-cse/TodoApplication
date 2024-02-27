import axios from "axios";


const apiClient = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
);

//retrive all the todos for a specific users
export const retrieveAllTodosForUsernameApi =
    (username) => apiClient.get(`/users/${username}/todos`);
    
//delete the todos for a specific users
export const deleteTodoApi =
    (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);
    
//retrieve a todo for a specific id
export const retrieveTodoApi =
    (username, id) => apiClient.get(`/users/${username}/todos/${id}`);
    
import axios from "axios";


const apiClient = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
);

//retrive all the todos for a specific users
export const retrieveAllTodosForUsername =
    (username) => apiClient.get(`/users/${username}/todos`)
    
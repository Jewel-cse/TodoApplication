import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

//1st way to invoke api call using axios
export function retrieveHelloWorld() {
    return apiClient.get("/hello-world");
}
//2nd way using arrow function
export const retrieveHelloWorldBean = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWorldPathvariable =
    (username) => apiClient.get(`/hello-world/path-variable/${username}`);
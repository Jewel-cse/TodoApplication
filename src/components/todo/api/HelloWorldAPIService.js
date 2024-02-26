import axios from "axios";
//1st way to invoke api call using axios
export default function retrieveHelloWorld() {
    return axios.get('http://localhost:8080/hello-world');
}
//2nd way using arrow function
export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean');
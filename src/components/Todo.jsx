import { useParams } from "react-router-dom";
import { useAuth } from "./todo/security/AuthContext";
import { retrieveTodoApi } from "./todo/api/TodoApiService";
import { useEffect, useState } from "react";

export default function TodoComponent() {
    const { id } = useParams();
    const authContext = useAuth();
    const username = authContext.username;
    const [description,setDescription] =  useState("")

    useEffect(
        ()=>retrieveTodo(),[id]    //id change holei retrieveTodo() call hobe, [id] dependency array
    )


    function retrieveTodo() {
        retrieveTodoApi(username,id)
        .then((response) =>
            {
               setDescription(response.data.description) 
                console.log(response.data)
            })
        .catch((error) =>console.log(error))
    }
    return (
        <div className="container">
            <h2>Enter Todo Details</h2>
            <div>
                Description: {description}
            </div>
        </div>
    );
}

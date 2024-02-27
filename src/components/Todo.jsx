import { useParams } from "react-router-dom";
import { useAuth } from "./todo/security/AuthContext";
import { retrieveTodoApi } from "./todo/api/TodoApiService";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";

export default function TodoComponent() {
    const { id } = useParams();
    const authContext = useAuth();
    const username = authContext.username;
    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState("");

    useEffect(
        () => retrieveTodo(),
        [id] //id change holei retrieveTodo() call hobe, [id] dependency array
    );

    function retrieveTodo() {
        retrieveTodoApi(username, id)
            .then((response) => {
                setDescription(response.data.description);
                setTargetDate(response.data.targetDate);
                console.log(response.data);
            })
            .catch((error) => console.log(error));
    }
    function onSubmit(values) {
        console.log(values)
    }
    return (
        <div className="container">
            <h2>Enter Todo Details</h2>
            <div>
                <Formik
                    initialValues={{ description, targetDate }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                >
                    {(props) => (
                        <Form>
                            <fieldset className="from-group">
                                <label>Description</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="description"
                                ></Field>
                            </fieldset>
                            <fieldset className="from-group">
                                <label>TargetDate</label>
                                <Field
                                    type="date"
                                    className="form-control"
                                    name="targetDate"
                                ></Field>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">
                                    Save
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

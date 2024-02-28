import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./todo/security/AuthContext";
import { retrieveTodoApi, updateTodoApi } from "./todo/api/TodoApiService";
import { useEffect, useState } from "react";
import { Formik, Form, Field ,ErrorMessage} from "formik";

export default function TodoComponent() {
    const { id } = useParams();
    const authContext = useAuth();
    const username = authContext.username;
    const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const navigate = useNavigate()

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
      console.log(values,'-for submit')
      const todo = {
        id: id,
        description: values.description,
        targetDate: values.targetDate,
        done:false
      }
      //console.log(todo,'-todo object')
      updateTodoApi(username, id, todo)
        .then((response) => {
          navigate('/todos')
        })
      .catch((error)=>console.log(error))
    }
    function validate(values) {
        let error = {}
        if (values.description.length < 5)
            error.description ='Enter atleast 5 characters'
        if (values.targetDate == null)
            error.targetDate ='Enter enter a valid date'
        
        console.log(values,"- for validation")
        return error
    }
    return (
      <div className="container">
        <h2>Enter Todo Details</h2>
        <div>
          <Formik
            initialValues={{ description, targetDate }}
            enableReinitialize={true}
            onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur = {false}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />


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

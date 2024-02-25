import {Link, useParams } from "react-router-dom";
export default function WellcomeComponent() {
  const { username } = useParams();
  return (
    <div>
      <h2>Wellcome Mr. {username}</h2>
      <div className="Wellcome">
        Manage your todos-<Link to="/todos">Go here</Link>
      </div>
    </div>
  );
}

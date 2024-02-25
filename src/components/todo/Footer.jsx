import { useContext } from "react";
import { AuthContext } from "../security/AuthContext";

export default function FooterComponent() {
  const authContext = useContext(AuthContext);
  console.log(`Footer is - ${authContext.number}`);
  return (
    <footer className="footer">
      <div className="container">copywrite@jewel.com</div>
    </footer>
  );
}

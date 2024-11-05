import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/test-github-actions/">Home</Link>
        {" | "}
        <Link to="/test-github-actions/contact">Contact</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default App;

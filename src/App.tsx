import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/vite-react-router/">Home</Link>
        {" | "}
        <Link to="/vite-react-router/contact">Contact</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default App;

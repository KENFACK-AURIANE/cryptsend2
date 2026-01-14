import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import Sidebar from './composants/Sidebar'
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import PrivateRoute from "./protection/PrivateRoute";
import Logs from "./pages/Logs";
import Monitoring from "./pages/Monitoring";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="logs" element={<Logs />} />
            <Route path="monitoring" element={<Monitoring />} />
          </Route>
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

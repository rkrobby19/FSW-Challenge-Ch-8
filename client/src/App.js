import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import CollapsibleNavbar from "./components/CollapsibleNavbarNavbar";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";

function App() {
    return (
        <Router>
            <div>
                <CollapsibleNavbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />

                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

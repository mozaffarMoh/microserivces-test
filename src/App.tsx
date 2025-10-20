import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/ui/Home";
import { UsersPage } from "./features/users";
import { BranchesPage } from "./features/branches";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="branches" element={<BranchesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { UsersPage } from "./features/users";
import { BranchesPage } from "./features/branches";
import Test from "./components/ui/Test";
import "@artifact/ui-lib/ui-lib.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Test />} />
          <Route path="test" element={<Test />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="branches" element={<BranchesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

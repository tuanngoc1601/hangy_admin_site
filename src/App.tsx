import { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />

          {/* Nếu bạn có trang index, bạn có thể giữ Navigate thay cho Redirect */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        <h1 className="text-red-500 text-xl">Hangy-site Admin</h1>
      </Router>
    </>
  );
}

export default App;

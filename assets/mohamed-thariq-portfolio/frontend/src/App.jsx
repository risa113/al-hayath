import { useState } from "react";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";

export default function App() {
  const [page, setPage] = useState(window.location.pathname.startsWith("/admin") ? "admin" : "home");

  const goAdmin = () => {
    window.history.pushState({}, "", "/admin");
    setPage("admin");
  };

  const goHome = () => {
    window.history.pushState({}, "", "/");
    setPage("home");
  };

  return page === "admin" ? <Admin goHome={goHome} /> : <Home goAdmin={goAdmin} />;
}

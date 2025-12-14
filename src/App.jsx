import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          {/* Pagina Home */}
          <Route index element={<Home />} />

          {/* Pagina dettaglio */}
          <Route path="movies/:id" element={<MovieDetail />} />
        </Route>



        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin Home */}
          <Route index element={<AdminDashboard />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
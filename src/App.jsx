import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App
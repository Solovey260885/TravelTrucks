import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/HomePage.jsx";
import Catalog from "../pages/CatalogPage/CatalogPage.jsx";
import CamperDetails from "../pages/CamperDetailsPage/CamperDetailsPage.jsx";
import Layout from "./Layout/Layout.jsx";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CamperDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

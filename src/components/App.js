import { Routes, Route } from "react-router-dom";

import '../styles/App.scss';
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import MyPhotos from "./pages/MyPhotos";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/my-photos" element={<MyPhotos />} />
      </Routes>
    </Layout>
  );
}

export default App;

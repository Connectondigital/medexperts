import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import DoctorList from "./pages/DoctorList";
import DoctorDetail from "./pages/DoctorDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doktorlar" element={<DoctorList />} />
          <Route path="/doktorlar/:slug" element={<DoctorDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

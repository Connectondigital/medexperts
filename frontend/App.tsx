import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { Layout } from "./components/Layout";
import DoctorList from "./pages/DoctorList";
import DoctorDetail from "./pages/DoctorDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<DoctorList />} />
          <Route path="/doktorlar" element={<DoctorList />} />
          <Route path="/doktorlar/:slug" element={<DoctorDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

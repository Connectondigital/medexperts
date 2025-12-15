import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Layout } from './components/Layout';
import DoctorList from './pages/DoctorList';
import DoctorDetail from './pages/DoctorDetail';

// ScrollToTop component to handle scrolling on route change
const ScrollToTop = () => {
    const { pathname } = React.useMemo(() => window.location, []);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App: React.FC = () => {
  return (
    <Router>
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
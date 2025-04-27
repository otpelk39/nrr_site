import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Showcase } from './pages/Showcase';
import { ProjectPlanner } from './pages/ProjectPlanner';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/project-planner" element={<ProjectPlanner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
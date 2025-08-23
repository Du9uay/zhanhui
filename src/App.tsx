import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import GlobalBackground from './components/GlobalBackground';
import PageVignette from './components/PageVignette';
import HomePage from './pages/HomePage';
import ObjectivesPage from './pages/ObjectivesPage';
import CareersPage from './pages/CareersPage';
import ConsumerElectronicsTrendsPage from './pages/course/ConsumerElectronicsTrendsPage';
import ThemeBrandConceptsPage from './pages/course/ThemeBrandConceptsPage';
import PositioningProcessPage from './pages/course/PositioningProcessPage';
import PlanningMethodsPage from './pages/course/PlanningMethodsPage';
import CaseStudiesPage from './pages/course/CaseStudiesPage';

import CourseSummaryPage from './pages/CourseSummaryPage';
import CourseTestPage from './pages/CourseTestPage';
import HomeworkPage from './pages/HomeworkPage';



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <GlobalBackground />
        <PageVignette />
        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/objectives" element={<ObjectivesPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/course/consumer-electronics-trends" element={<ConsumerElectronicsTrendsPage />} />
            <Route path="/course/theme-brand-concepts" element={<ThemeBrandConceptsPage />} />
            <Route path="/course/positioning-process" element={<PositioningProcessPage />} />
            <Route path="/course/planning-methods" element={<PlanningMethodsPage />} />
            <Route path="/course/case-studies" element={<CaseStudiesPage />} />

            <Route path="/course-summary" element={<CourseSummaryPage />} />
            <Route path="/course-test" element={<CourseTestPage />} />
            <Route path="/homework" element={<HomeworkPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 
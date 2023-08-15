import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";
import "flag-icons/css/flag-icons.min.css";
import Layout from "components/Layout";
import Home from "pages/Home/Home";
import Jobs from "pages/Jobs/Jobs";
import JobDetail from "pages/Jobs/JobDetail";
import AboutUs from "pages/AboutUs";
import Contact from "pages/Contact"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} /> {/* Add a route for job detail */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/apply" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

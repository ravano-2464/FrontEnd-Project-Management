import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectForm from './components/ProjectForm';
import TaskForm from './components/TaskForm';
import ReportForm from './components/ReportForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/MyProjects" element={<ProjectForm />} />
        <Route path="/MyTask" element={<TaskForm />} />
        <Route path="/addNewReport" element={<ReportForm />} />
      </Routes>
    </Router>
  );
};

export default App;
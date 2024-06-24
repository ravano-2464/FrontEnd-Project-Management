import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectForm from './components/ProjectForm';
import TaskForm from './components/TaskForm';
import ReportForm from './components/ReportForm';
import FormResults from './components/FormResults';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addNewProject" element={<ProjectForm />} />
        <Route path="/addNewTask" element={<TaskForm />} />
        <Route path="/addNewReport" element={<ReportForm />} />
        <Route path="/formResults" element={<FormResults />} />
      </Routes>
    </Router>
  );
};

export default App;
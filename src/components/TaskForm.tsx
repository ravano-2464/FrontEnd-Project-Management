import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  IconButton,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import { Menu as MenuIcon } from '@mui/icons-material';

const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim() === '') {
      alert('Task Name cannot be empty!');
      return;
    }
    console.log('Task form submitted!', { taskName, taskDescription });
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSidebar}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Task
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} /> 
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Card sx={{ maxWidth: '500px', width: '100%', margin: 'auto', marginLeft: '280px' }}>
            <CardContent>
              <Typography variant="h6" component="h2" align="center" gutterBottom>
                My Task
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ textAlign: 'center' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="taskName"
                      label="Task Name"
                      name="taskName"
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="taskDescription"
                      label="Task Description"
                      name="taskDescription"
                      multiline
                      rows={4}
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button onClick={handleBackToDashboard} variant="outlined" color="secondary" sx={{ mr: 2 }}>
                    Back to Dashboard
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ p: 3 }}>
          <Button type="submit" variant="contained" color="primary" sx={{ mb: 2, marginLeft: '340px' }}>
            Add Task
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskForm;
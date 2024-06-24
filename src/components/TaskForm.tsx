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
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim() === '') {
      alert('Task Name cannot be empty!');
      return;
    }
    console.log('Task form submitted!', { taskName, taskDescription });
    navigate('/formResults', { state: { type: 'task', data: { taskName, taskDescription } } });
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Add New Task
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        marginLeft='520px'
      >
        <Card sx={{ maxWidth: '500px', width: '100%', margin: 2 }}>
          <CardContent>
            <Typography variant="h6" component="h2" align="center" gutterBottom>
              Add New Task
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
              <Box mt={2}>
                <Button onClick={handleBackToDashboard} variant="outlined" color="secondary" fullWidth sx={{ mb: 2 }}>
                  Back to Dashboard
                </Button>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Add Task
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default TaskForm;
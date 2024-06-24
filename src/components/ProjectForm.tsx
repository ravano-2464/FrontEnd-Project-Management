import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Card, CardContent, Typography, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectForm: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Project form submitted!', { projectName, projectDescription });
    navigate('/formResults', { state: { type: 'project', data: { projectName, projectDescription } } });
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Add New Project
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)" 
        marginLeft="525px"
      >
        <Card sx={{ maxWidth: '500px', width: '100%' }}>
          <CardContent>
            <Typography variant="h6" component="h2" style={{ textAlign: 'center' }} gutterBottom>
              Add New Project
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="projectName"
                    label="Project Name"
                    name="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="projectDescription"
                    label="Project Description"
                    name="projectDescription"
                    multiline
                    rows={4}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Box mt={2}>
                <Button onClick={handleBackToDashboard} variant="outlined" color="secondary" fullWidth sx={{ mb: 2 }}>
                  Back to Dashboard
                </Button>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Add Project
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ProjectForm;
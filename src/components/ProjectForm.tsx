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
import ProjectIcon from '@mui/icons-material/AccountTree';

const ProjectForm: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (projectName.trim() === '') {
      alert('Project Name cannot be empty!');
      return;
    }
    console.log('Project form submitted!', { projectName, projectDescription });
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f9f9f9', width: '150%' }}>
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
          <ProjectIcon sx={{ mr: 1, mb: 0.5, mt: 0.5 }}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Projects
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ display: 'flex', flexGrow: 1, marginLeft: '20px', }}>
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} /> 
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Card sx={{ maxWidth: '500px', width: '100%', margin: 'auto' }}>
            <CardContent>
              <Typography variant="h6" component="h2" align="center" gutterBottom>
                Projects
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ textAlign: 'center' }}>
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
                <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button onClick={handleBackToDashboard} variant="outlined" color="secondary" sx={{ backgroundColor: '#f9f9f9', mr: 2 }}>
                    Back to Dashboard
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ p: 2 }}>
          <Button type="submit" variant="contained" sx={{ mb: 2, marginLeft: '35px', bgcolor: '#0b9e71' }}>
            Add New Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectForm;
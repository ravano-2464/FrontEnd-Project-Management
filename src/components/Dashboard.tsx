import React from 'react';
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import {
  AddCircleOutline as AddCircleOutlineIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate('/addNewProject');
  };

  const handleTaskClick = () => {
    navigate('/addNewTask');
  };

  const handleReportClick = () => {
    navigate('/addNewReport');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Project Management Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: '64px' }}>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 'calc(100vh - 64px)',
              textAlign: 'center',
              marginLeft: '480px'
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to Your Project Dashboard
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent onClick={handleProjectClick} sx={{ cursor: 'pointer' }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      Projects
                    </Typography>
                    <IconButton
                      aria-label="add project"
                      sx={{ display: 'block', margin: '0 auto' }}
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent onClick={handleTaskClick} sx={{ cursor: 'pointer' }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      Tasks
                    </Typography>
                    <IconButton aria-label="add task" sx={{ display: 'block', margin: '0 auto' }}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent onClick={handleReportClick} sx={{ cursor: 'pointer' }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      Reports
                    </Typography>
                    <IconButton aria-label="view reports" sx={{ display: 'block', margin: '0 auto' }}>
                      <AssignmentIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
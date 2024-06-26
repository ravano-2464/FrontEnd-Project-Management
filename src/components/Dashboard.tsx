import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
} from '@mui/material';
import {
  Menu as MenuIcon,
} from '@mui/icons-material';
import Sidebar from './Sidebar';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Box 
        sx={{ 
          flexGrow: 1, 
          ml: sidebarOpen ? '240px' : '0', 
          transition: 'margin-left 0.3s', 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
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
              Project Management Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            bgcolor: 'white',
            color: 'text.primary',
            minHeight: 'calc(100vh - 64px)',
            transition: 'all 0.3s ease',
          }}
        >
          <Container>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                marginLeft: 'auto',
                width: '100%',
                position: 'relative-relative',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <Typography variant="h4" component="h1">
                Welcome to Your Dashboard
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
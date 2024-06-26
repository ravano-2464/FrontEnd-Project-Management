import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  AccountTreeOutlined as AccountTreeOutlinedIcon,
  Assignment as AssignmentIcon,
  Menu as MenuIcon,
  Task as TaskIcon
} from '@mui/icons-material';

const Sidebar: React.FC<{ open: boolean; toggleSidebar: () => void }> = ({ open, toggleSidebar }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Box>
      <List sx={{ marginRight: '10px' }}>
        <ListItem button component={Link} to="/" onClick={toggleSidebar}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/MyProjects" onClick={toggleSidebar}>
          <ListItemIcon><AccountTreeOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="/MyTask" onClick={toggleSidebar}>
          <ListItemIcon><TaskIcon /></ListItemIcon>
          <ListItemText primary="My Task" />
        </ListItem>
        <ListItem button component={Link} to="/addNewReport" onClick={toggleSidebar}>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Add New Report" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
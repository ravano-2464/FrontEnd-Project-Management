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
  AddCircleOutline as AddCircleOutlineIcon,
  Assignment as AssignmentIcon,
  Menu as MenuIcon,
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
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem button component={Link} to="/" onClick={toggleSidebar}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/addNewProject" onClick={toggleSidebar}>
          <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
          <ListItemText primary="Add New Project" />
        </ListItem>
        <ListItem button component={Link} to="Task" onClick={toggleSidebar}>
          <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
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
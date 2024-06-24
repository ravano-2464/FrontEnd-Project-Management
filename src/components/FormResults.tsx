import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';

const FormResults: React.FC = () => {
  const location = useLocation();
  const { type, data } = location.state || {};

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Form Submission Results
        </Typography>
        <Box>
          {type === 'project' && (
            <>
              <Typography variant="body1">Project Name: {data.projectName}</Typography>
              <Typography variant="body1">Project Description: {data.projectDescription}</Typography>
            </>
          )}
          {type === 'task' && (
            <>
              <Typography variant="body1">Task Name: {data.taskName}</Typography>
              <Typography variant="body1">Task Description: {data.taskDescription}</Typography>
            </>
          )}
          {type === 'report' && (
            <>
              <Typography variant="body1">Report Title: {data.reportTitle}</Typography>
              <Typography variant="body1">Report Content: {data.reportContent}</Typography>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default FormResults;
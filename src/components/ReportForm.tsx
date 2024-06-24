import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Card, CardContent, Typography, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ReportForm: React.FC = () => {
  const [reportTitle, setReportTitle] = useState('');
  const [reportContent, setReportContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Report form submitted!', { reportTitle, reportContent });
    navigate('/formResults', { state: { type: 'report', data: { reportTitle, reportContent } } });
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Add New Report
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
              Add New Report
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="reportTitle"
                    label="Report Title"
                    name="reportTitle"
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="reportContent"
                    label="Report Content"
                    name="reportContent"
                    multiline
                    rows={4}
                    value={reportContent}
                    onChange={(e) => setReportContent(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Box mt={2}>
              <Button onClick={handleBackToDashboard} variant="outlined" color="secondary" fullWidth sx={{ mb: 2 }}>
                  Back to Dashboard
                </Button>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Add Report
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ReportForm;
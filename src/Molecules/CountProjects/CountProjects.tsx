import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const stats = [
  { label: 'LIVE PROJECTS', value: '05', size: '13,500', color: '#1976d2' },
  { label: 'UPCOMING', value: '12', size: '24,500', color: '#fbc02d' },
  { label: 'COMPLETED', value: '03', size: '10,500', color: '#388e3c' },
  { label: 'NOT CONFIRMED', value: '02', size: '2,500', color: '#e64a19' },
  { label: 'TOTAL USERS', value: '250', size: '25,320' },
];

const CountProjects: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={2.4} key={index}>
          <Card elevation={2} sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <Box sx={{ height: 5, backgroundColor: stat.color }} />
            <CardContent
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  {stat.label}
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {stat.value}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  TOTAL SIZE SQ.FT.
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {stat.size}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CountProjects;

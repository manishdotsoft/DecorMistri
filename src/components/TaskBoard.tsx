import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const TaskBoard: React.FC = () => {
  const columns = ['To Do', 'In Progress', 'QA', 'Completed'];
  const tasks = [
    {
      column: 'To Do',
      title: 'UX Adjustments',
      description: 'Adjust UI as needed',
    },
    {
      column: 'In Progress',
      title: 'Slack Integration',
      description: 'Add Slack feature',
    },
    { column: 'QA', title: 'Dashboard Design', description: 'Design testing' },
    {
      column: 'Completed',
      title: 'Presentation',
      description: 'Create presentation',
    },
  ];

  return (
    <Grid container spacing={2}>
      {columns.map((column) => (
        <Grid item xs={3} key={column}>
          <Typography variant="h6">{column}</Typography>
          {tasks
            .filter((task) => task.column === column)
            .map((task, index) => (
              <Card key={index} variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1">{task.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {task.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskBoard;

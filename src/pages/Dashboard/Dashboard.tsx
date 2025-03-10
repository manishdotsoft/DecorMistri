// import { Box } from '@mui/material';
// import {
//   Divider,
//   // HeadingItem,
//   // BoxItem,
//   BoxContainer,
//   // Cards,
//   // DividerColumn,
// } from './Dashboard.styel';

// import Card from '../../Molecules/Card/Card';
// // import { ProjectStatus } from '../../store/reducers/projectDataSlice';
// import Loader from '../../atoms/Loader/Loader';
// import { useDashboardLogic } from './Dashboard.hook';

// const Dashboard = () => {
//   const { loading, projects } = useDashboardLogic();

//   return (
//     <Box>
//       <Divider />
//       {loading ? (
//         <Loader message="" size={'large'} />
//       ) : (
//         <BoxContainer>
//           <Card data={projects} buttonTitle={'Move to live'} />
//         </BoxContainer>
//       )}
//     </Box>
//   );
// };

// export default Dashboard;
import React from 'react';
import { Box } from '@mui/material';
import ProjectCard from '../../Molecules/Card/Card';

const projects = [
  {
    title: 'Live Projects',
    project: {
      name: 'Ravikumar Residential ',
      id: 'CD-001- Ravi-OS-1',
      location: 'Noida',
      size: '1300',
      completion: 5,
      date: '15-Jan-2025 to Jul-24',
      ownerImage: '',
    },
    status: 'Live',
  },
  {
    title: 'Upcoming Project',
    project: {
      name: 'Dezins4u Interiors',
      id: 'CD-004- Anili-0K-2',
      location: 'Hyderabad',
      size: '2450',
      completion: 0,
      date: '12-Dec-2024 to Jul-26',
      ownerImage: '',
    },
    status: 'Upcoming',
  },
  {
    title: 'Completed Project',
    project: {
      name: 'Omnisoft Solutions',
      id: 'CD-004- Anili-0K-2',
      location: 'Hyderabad',
      size: '2450',
      completion: 85,
      date: '12-Dec-2024 to Jul-26',
      ownerImage: '',
    },
    status: 'Completed',
  },
  {
    title: 'Not confirmed',
    project: {
      name: 'Omnisoft Solutions',
      id: 'CD-004- Anili-0K-2',
      location: 'Hyderabad',
      size: '2450',
      completion: 85,
      date: '12-Dec-2024 to Jul-26',
      ownerImage: ' ',
    },
    status: 'NotConfirmed',
  },
];

const ProjectBoard: React.FC = () => {
  return (
    <Box display="flex" justifyContent={'center'} gap={2} flexWrap="wrap">
      {projects.map((proj, index) => (
        <ProjectCard
          key={index}
          title={proj.title}
          project={proj.project}
          status={proj.status}
          onStatusChange={() =>
            console.log(`Updating status for ${proj.project.name}`)
          }
        />
      ))}
    </Box>
  );
};

export default ProjectBoard;

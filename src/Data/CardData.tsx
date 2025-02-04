import {
  ProjectStatus,
  ProjectDataType,
} from '../store/reducers/projectDataSlice';
export const ProjectData: ProjectDataType[] = [
  {
    id: 1,
    value: 'Complete 1',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
    status: ProjectStatus.Complete,
  },
  {
    id: 2,

    value: 'Complete 2',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: ProjectStatus.Complete,
  },
  {
    id: 3,

    value: 'Complete 3',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: ProjectStatus.Complete,
  },

  {
    id: 4,

    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 0,
    status: ProjectStatus.NotConfirmed,
  },
  {
    id: 5,

    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 0,
    status: ProjectStatus.NotConfirmed,
  },
  {
    id: 6,

    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 0,
    status: ProjectStatus.NotConfirmed,
  },

  {
    id: 7,
    value: 'Upcoming  1',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
    status: ProjectStatus.Upcoming,
  },
  {
    id: 8,

    value: 'Upcoming 2',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: ProjectStatus.Upcoming,
  },
  {
    id: 9,

    value: 'Upcoming 3',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: ProjectStatus.Upcoming,
  },

  {
    id: 10,

    value: 'Live 1',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
    status: ProjectStatus.Live,
  },
  {
    id: 11,

    value: 'Live 2',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: ProjectStatus.Live,
  },
  {
    id: 12,

    value: 'Live 3',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: ProjectStatus.Live,
  },
  {
    id: 13,

    value: 'Live 2',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: ProjectStatus.Live,
  },
  {
    id: 14,

    value: 'Complete 4',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: ProjectStatus.Complete,
  },
  {
    id: 15,

    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 0,
    status: ProjectStatus.NotConfirmed,
  },
  {
    id: 16,

    value: 'Upcoming 4',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: ProjectStatus.Upcoming,
  },
];
export const menuItems = [
  'Edit',
  'Change Status',
  'Add Phase',
  'Add Task',
  'Delete Project',
];

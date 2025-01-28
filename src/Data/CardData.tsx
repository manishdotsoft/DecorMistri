export enum ProjectStatus {
  Complete = 'Complete',
  NotConfirmed = 'NotConfirmed',
  Upcoming = 'Upcoming',
  Live = 'Live',
}

export interface ProjectDataType {
  id: number;
  value: string;
  designType: string;
  location: string;
  startDate: string;
  endDate: string;
  completionPercentage: number;
  status: string;
}

export const ProjectData: ProjectDataType[] = [
  {
    id: 1,

    value: 'Complete Project 1',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
    status: 'Complete',
  },
  {
    id: 2,

    value: 'Complete Project 2',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: 'Complete',
  },
  {
    id: 3,

    value: 'Complete Project 3',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: 'Complete',
  },

  {
    id: 4,

    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 0,
    status: 'NotConfirmed',
  },
  {
    id: 5,

    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 0,
    status: 'NotConfirmed',
  },
  {
    id: 6,

    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 0,
    status: 'NotConfirmed',
  },

  {
    id: 7,
    value: 'Upcoming Project 1',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
    status: 'Upcoming',
  },
  {
    id: 8,

    value: 'Upcoming Project 2',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: 'Upcoming',
  },
  {
    id: 9,

    value: 'Upcoming Project 3',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: 'Upcoming',
  },

  {
    id: 10,

    value: 'Live Project 1',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
    status: 'Live',
  },
  {
    id: 11,

    value: 'Live Project 2',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: 'Live',
  },
  {
    id: 12,

    value: 'Live Project 3',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
    status: 'Live',
  },
];
export const menuItems = [
  'Edit',
  'Change Status',
  'Add Phase',
  'Add Task',
  'Delete Project',
];

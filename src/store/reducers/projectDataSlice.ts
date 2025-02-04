import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  status: ProjectStatus;
}

interface ProjectState {
  projects: ProjectDataType[];
}

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<ProjectDataType[]>) => {
      state.projects = action.payload;
    },
    updateProjectStatus: (
      state,
      action: PayloadAction<{ projectValue: string; newStatus: ProjectStatus }>
    ) => {
      const { projectValue, newStatus } = action.payload;
      const project = state.projects.find((p) => p.value === projectValue);
      if (project) {
        project.status = newStatus;
      }
    },
    deleteProject(state, action: PayloadAction<string>) {
      state.projects = state.projects.filter(
        (project) => project.value !== action.payload
      );
    },
  },
});

export const { setProjects, updateProjectStatus, deleteProject } =
  projectSlice.actions;

export default projectSlice.reducer;

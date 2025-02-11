// import { useState } from 'react';
// import { ProjectStatus } from '../../store/reducers/projectDataSlice';

// export const useProjectMenu = (
//   handleUpdateStatus: (projectValue: string, newStatus: ProjectStatus) => void
// ) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [currentProject, setCurrentProject] = useState<string | null>(null);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleMenuOpen = (
//     event: React.MouseEvent<HTMLElement>,
//     projectValue: string
//   ) => {
//     setAnchorEl(event.currentTarget);
//     setCurrentProject(projectValue);
//     setShowDropdown(true);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setCurrentProject(null);
//     setShowDropdown(false);
//   };

//   const handleOptionClick = (option: string) => {
//     if (option === 'Change Status') {
//       setShowDropdown((prev) => !prev);
//     } else if (option === 'Delete Project') {
//       console.log(`Delete project: ${currentProject}`);
//     } else {
//       const newStatus = option as ProjectStatus;
//       if (currentProject) {
//         handleUpdateStatus(currentProject, newStatus);
//       }
//       setShowDropdown(false);
//     }
//   };

//   return {
//     anchorEl,
//     currentProject,
//     showDropdown,
//     handleMenuOpen,
//     handleMenuClose,
//     handleOptionClick,
//   };
// };

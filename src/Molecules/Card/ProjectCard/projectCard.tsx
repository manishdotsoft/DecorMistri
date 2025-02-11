// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   IconButton,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// interface Project {
//   id: number;
//   completionPercentage: number;
//   designType: string;
//   endDate: string;
//   location: string;
//   startDate: string;
//   status: string;
//   value: string;
// }

// interface ProjectCardProps {
//   data: Project[];
//   cardStyle?: React.CSSProperties;
// }

// const CardGrid: React.FC<ProjectCardProps> = ({ data, cardStyle }) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

//   const handleMenuClick = (event: React.MouseEvent<HTMLElement>, projectId: number) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedProjectId(projectId);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setSelectedProjectId(null);
//   };

//   return (
//     <Box display="flex" gap={2} justifyContent="space-between" alignItems="stretch">
//       {data.length > 0 ? (
//         data.map((project) => (
//           <Card key={project.id} sx={{ minWidth: 275, position: "relative", ...cardStyle }}>
//             <IconButton
//               aria-label="more"
//               aria-controls="menu"
//               aria-haspopup="true"
//               onClick={(event) => handleMenuClick(event, project.id)}
//               sx={{ position: "absolute", top: 8, right: 8 }}
//             >
//               <MoreVertIcon />
//             </IconButton>

//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl) && selectedProjectId === project.id}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>Edit</MenuItem>
//               <MenuItem onClick={handleClose}>Delete</MenuItem>
//             </Menu>

//             <CardContent>
//               <Typography variant="h6" sx={{ mb: 1 }}>
//                 {project.designType}
//               </Typography>
//               <Typography variant="body2">Location: {project.location}</Typography>
//               <Typography variant="body2">Status: {project.status}</Typography>
//               <Typography variant="body2">Start Date: {project.startDate}</Typography>
//               <Typography variant="body2">End Date: {project.endDate}</Typography>
//               <Typography variant="body2">Value: {project.value}</Typography>
//               <Typography variant="body2">
//                 Completion: {project.completionPercentage}%
//               </Typography>
//             </CardContent>
//           </Card>
//         ))
//       ) : (
//         <Typography variant="body2" sx={{ textAlign: "center", color: "gray" }}>
//           No data available
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default CardGrid;

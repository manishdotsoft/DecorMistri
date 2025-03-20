import React from 'react';
import { useTheme } from '@mui/material';
import {
  CardChild,
  CardFirst,
  CardMain,
  CardSecond,
  ColorBox,
  CountProjectsMainSec,
  LabelTypography,
  ValueTypography,
} from './CountProjects.style';

interface CountProjectsProps {
  status?: string;
}

const CountProjects: React.FC<CountProjectsProps> = ({ status }) => {
  const theme = useTheme();

  const stats = [
    {
      label: 'LIVE PROJECTS',
      value: '05',
      size: '13,500',
      color: theme.palette.rateSheduleColors.colorD,
      key: 'live',
    },
    {
      label: 'UPCOMING',
      value: '12',
      size: '24,500',
      color: theme.palette.warning.upcoming,
      key: 'upcoming',
    },
    {
      label: 'COMPLETED',
      value: '03',
      size: '10,500',
      color: theme.palette.rateSheduleColors.complete,
      key: 'complete',
    },
    {
      label: 'NOT CONFIRMED',
      value: '02',
      size: '2,500',
      color: theme.palette.rateSheduleColors.bookedOut,
      key: 'notconfirmed',
    },
    {
      label: 'TOTAL USERS',
      value: '250',
      size: '25,320',
      key: 'total',
    },
  ];

  const filteredStats = status
    ? stats.filter((stat) => stat.key.toLowerCase() === status.toLowerCase())
    : stats;

  return (
    <CountProjectsMainSec>
      {filteredStats.map((stat, index) => (
        <CardMain key={index}>
          <ColorBox color={stat.color} />
          <CardChild>
            <CardFirst>
              <LabelTypography>{stat.label}</LabelTypography>
              <ValueTypography>{stat.value}</ValueTypography>
            </CardFirst>
            <CardSecond>
              <LabelTypography>TOTAL SIZE SQ.FT.</LabelTypography>
              <ValueTypography>{stat.size}</ValueTypography>
            </CardSecond>
          </CardChild>
        </CardMain>
      ))}
    </CountProjectsMainSec>
  );
};

export default CountProjects;

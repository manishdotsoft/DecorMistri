import { Theme } from '@mui/material';

interface CardStyle {
  borderColor: string;
  buttonBgColor: string;
  ButtonColor: string;
  title: string;
  completionColor: string;
}

export const getCardStyle = (status: string, theme: Theme): CardStyle => {
  switch (status) {
    case 'Live':
      return {
        borderColor: theme?.palette?.rateSheduleColors?.colorD,
        buttonBgColor: theme?.palette?.decor?.main,
        ButtonColor: theme?.palette?.decor?.main,
        completionColor: theme?.palette?.primary?.complete,
        title: 'Open Project',
      };
    case 'Upcoming':
      return {
        borderColor: theme?.palette?.warning?.upcoming,
        buttonBgColor: theme?.palette?.warning?.orange,
        completionColor: theme?.palette?.primary?.complete,

        ButtonColor: theme?.palette?.warning?.orange,
        title: 'Move to Live',
      };
    case 'Completed':
      return {
        borderColor: theme?.palette?.primary?.success,
        buttonBgColor: theme?.palette?.primary?.complete,
        completionColor: theme?.palette?.primary?.complete,

        ButtonColor: theme?.palette?.black[200],
        title: 'Detail View',
      };
    case 'NotConfirmed':
      return {
        borderColor: theme?.palette?.rateSheduleColors?.bookedOut,
        buttonBgColor: theme?.palette?.rateSheduleColors?.bookedOut,
        completionColor: theme?.palette?.primary?.complete,

        ButtonColor: theme?.palette?.black[200],
        title: 'Update Status',
      };
    default:
      return {
        borderColor: theme.palette.grey[400],
        buttonBgColor: theme.palette.background.default,
        ButtonColor: theme.palette.text.primary,
        completionColor: theme?.palette?.primary?.complete,
        title: '',
      };
  }
};

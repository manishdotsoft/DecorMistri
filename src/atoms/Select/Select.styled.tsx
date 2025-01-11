import { styled } from '@mui/material';
import { theme } from '../../thems/primitives/theme';

export const SelectFieldParent = styled('div')<{ backgroundColor?: string }>`
  padding: 12px;
  border-radius: 8px;
  display: inline-block;
  min-width: 200px;
  font-weight: 600;
  font-family: sans-serif;
  border: 'none';
`;

export const SelectOption = styled('select')`
  width: 100%;
  padding: 8px 12px;
  font-size: ${theme.typography.body1.fontSize};
  border: 'none';
  color: ${theme.palette.text.primary};
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.palette.primary.main};
  }
`;

export const Option = styled('option')`
  font-size: ${theme.typography.body2.fontSize};
  padding: 4px 8px;
  color: ${theme.palette.text.primary};

  cursor: pointer;

  &:hover {
  }
`;

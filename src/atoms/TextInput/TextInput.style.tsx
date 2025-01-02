import { styled } from '@mui/system';
import { theme as customTheme } from '../../thems/primitives/theme';

export const TextFieldWrapper = styled('div')<{ backgroundColor?: string }>`
  background-color: ${(props) =>
    props.backgroundColor || customTheme.palette.background.paper};
  padding: 8px;
  border-radius: 4px;
`;

export const InputLabelStyled = styled('label')<{
  labelColor?: string;
  fontSize?: string;
}>`
  display: block;
  margin-bottom: 8px;
  font-size: ${(props) =>
    props.fontSize || customTheme.typography.body1.fontSize};
  font-weight: 800;
  font-family: ${customTheme.typography.fontFamily};
  color: ${(props) => props.labelColor || customTheme.palette.text.secondary};
`;

export const StyledInput = styled('input')<{
  width?: string;
  padding?: string;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: string;
}>`
  width: ${(props) => props.width || '50%'};
  padding: ${(props) => props.padding || '10px'};
  border: 2px solid
    ${(props) => props.borderColor || customTheme.palette.grey[400]};
  border-radius: ${(props) => props.borderRadius || '4px'};
  font-size: ${(props) =>
    props.fontSize || customTheme.typography.body1.fontSize};
  outline: none;
  font-family: ${customTheme.typography.fontFamily};

  &:focus {
    border-color: ${customTheme.palette.primary.main};
  }
`;

export const ErrorMessage = styled('span')`
  color: ${customTheme.palette.error.main};
  font-size: 12px;
  margin-top: 4px;
  display: block;
  font-weight: bold;
  position: relative;
  text-align: left;
  font-family: ${customTheme.typography.fontFamily};
`;

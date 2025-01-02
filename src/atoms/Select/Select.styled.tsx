import { styled } from "@mui/material";
import { theme } from "../../thems/primitives/theme";

export const SelectFieldParent = styled("div")<{ backgroundColor?: string }>`
  background-color: ${(props) =>
    props.backgroundColor || theme.palette.grey[100]};
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: inline-block;
  min-width: 200px;

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor || theme.palette.grey[200]};
  }
`;

export const SelectOption = styled("select")`
  width: 100%;
  padding: 8px 12px;
  font-size: ${theme.typography.body1.fontSize}px;
  border: 1px solid ${theme.palette.grey[300]};
  border-radius: 4px;
  background-color: ${theme.palette.grey[100]};
  color: ${theme.palette.text.primary};
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.palette.primary.main};
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

export const Option = styled("option")`
  font-size: ${theme.typography.body2.fontSize}px;
  padding: 4px 8px;
  background-color: ${theme.palette.grey[100]};
  color: ${theme.palette.text.primary};
  cursor: pointer;

  &:hover {
    background-color: ${theme.palette.grey[100]};
  }
`;

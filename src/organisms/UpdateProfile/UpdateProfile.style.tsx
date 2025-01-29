import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import palette, { ICON_COLOR } from '../../thems/primitives/palette';
import fonts from '../../thems/primitives/fonts';
import typeset from '../../thems/primitives/typeset';
import {
  BOX_SHADOW3,
  DECOR_LOGO_COLOR,
  SHADE_COLOR,
} from '../../thems/primitives/colors';
import { theme } from '../../thems/primitives/theme';

export const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: fonts.primary,
  alignItems: 'center',
  minHeight: '92vh',
  backgroundColor: palette.white.main,

  padding: '16px',
  '@media(max-width: 468px)': {},
}));

export const MainFlex = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: fonts.primary,
  backgroundColor: palette.white.main,
  borderRadius: '25px',
  boxShadow: `0px 0px 20px 5px ${BOX_SHADOW3}`,
  overflow: 'hidden',
  width: '95%',
  '@media(max-width: 1310px)': {
    flexDirection: 'column',
    width: '90%',
  },
  '@media(max-width: 1047px)': {
    flexDirection: 'column',
    padding: '16px',
    width: '97%',
  },
  '@media(max-width: 468px)': {
    width: '100%',
    boxShadow: 'none',
    padding: '0',
  },
}));

// header
export const Header = styled(Box)(() => ({
  fontFamily: fonts.primary,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${SHADE_COLOR}`,
  padding: '20px',
}));

export const Line = styled(Box)(() => ({
  fontFamily: fonts.primary,
  width: '1px',
  display: 'flex',
  flexDirection: 'row',
  background: palette.grey[500],
  height: '30px',
}));

export const HeaderTitle = styled(Typography)(() => ({
  fontWeight: '600',
}));
export const A = styled(Typography)(() => ({
  fontSize: '1.1rem',
}));

export const HeaderProfileIcon = styled(Box)(() => ({
  height: '40px',
  width: '40px',
  background: DECOR_LOGO_COLOR,
  color: palette.white.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
}));

export const FirstTitleSec = styled(Box)(() => ({
  marginBottom: '60px',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const TitleSec = styled(Box)(() => ({
  width: '60%',
}));

export const StyledForm = styled('form')(() => ({
  fontFamily: fonts.primary,
}));
export const SetFormikError = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));

export const Logo = styled('img')(() => ({
  height: '40px',
}));

export const ChildFlex = styled('div')(({ theme }) => ({
  padding: '35px',
  display: 'flex',
  margin: '0 auto',
  width: '55%',
  flexDirection: 'column',
  overflow: 'hidden',
  fontFamily: fonts.primary,
  height: '100%',
  [theme.breakpoints.down('md')]: {
    width: '85%',
  },
}));
export const GridContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
});
export const GridContainerChild = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
});

export const StyledTypography = styled(Typography)(() => ({
  fontSize: typeset.caption.fontSize,
  color: palette.error.main,
  fontFamily: 'sans-serif',

  marginLeft: '15px',
}));

export const InputLabelItem = styled('label')(() => ({
  fontSize: '0.8rem',
  marginBottom: '1px',
  color: theme.palette.grey[600],
  fontFamily: typeset.secondaryFontFamily,
}));

export const ImageFlex = styled('div')(() => ({
  flex: 1,
  backgroundColor: palette.grey[50],
  width: '100%',
  height: '100%',
  fontFamily: fonts.primary,
  borderRadius: '25px',
}));

export const SignUpImageBox = styled('div')(() => ({
  width: '50%',
  height: 'auto',
  '@media(max-width: 468px)': {
    display: 'none',
  },
  '@media(max-width: 1338px)': {
    width: '100%',
  },
}));

export const AllImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('lg')]: {
    width: '95%',
    margin: '0 auto',
    padding: '18px',
  },
}));

export const StyledHeader = styled(Box)(() => ({
  fontFamily: fonts.primary,
  display: 'flex',
  // justifyContent: 'center',
  gap: '15px',
  alignItems: 'center',
}));

export const Title = styled(Typography)(() => ({
  fontSize: typeset.h4.fontSize,
  fontWeight: '300',
  fontFamily: fonts.primary,
  margin: '0',
  '@media(max-width: 1068px)': {
    fontSize: typeset.h5.fontSize,
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: typeset.button.fontSize,
  fontWeight: '300',
  color: palette.rateSheduleColors.colorB,
  fontFamily: fonts.primary,
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    fontSize: typeset.caption.fontSize,
  },
}));

// Profile picture

export const LabelProfile = styled('label')(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100px',
  borderRadius: '8px',
  overflow: 'hidden',
  border: `1px solid ${ICON_COLOR}`,
  borderStyle: 'dashed',
  cursor: 'pointer',
}));

export const MainUploadImage = styled(Box)(() => ({
  marginTop: '3px',
}));

export const ProfileUploadImg = styled('img')(() => ({
  width: '100px',
  height: '100%',
  objectFit: 'cover',
}));

export const CameraBtn = styled('img')(() => ({
  width: '15px',
  height: '15px',
}));

export const InputImg = styled('input')(() => ({
  display: 'none',
}));

export const ButtonSec = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  justifyContent: 'center',
  width: '100%',
  marginTop: '10px',
}));

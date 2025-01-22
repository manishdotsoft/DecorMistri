import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "../../thems/primitives/palette";
import fonts from "../../thems/primitives/fonts";
import typeset from "../../thems/primitives/typeset";

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  fontFamily: fonts.primary,
  alignItems: "center",
  minHeight: "92vh",
  backgroundColor: palette.background.default,
  padding: "16px",
  "@media(max-width: 468px)": {
    padding: "0px",
    marginTop: "35px",
  },
}));

export const MainFlex = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  fontFamily: fonts.primary,
  backgroundColor: palette.white.main,
  borderRadius: "25px",
  boxShadow: "0px 0px 100px 10px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
  width: "80%",
  "@media(max-width: 1310px)": {
    flexDirection: "column",
    width: "90%",
  },
  "@media(max-width: 1047px)": {
    flexDirection: "column",
    padding: "16px",
    width: "97%",
  },
  "@media(max-width: 468px)": {
    width: "100%",
    boxShadow: "none",
    padding: "0",
  },
}));

export const StyledForm = styled("form")(() => ({
  fontFamily: fonts.primary,
}));

export const Logo = styled("img")(() => ({
  height: "50px",
}));

export const ParentInputBox = styled("div")(() => ({
  fontFamily: fonts.primary,
  width: "100%",
}));

export const ChildFlex = styled("div")(({ theme }) => ({
  flex: 1,
  padding: "35px 100px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  fontFamily: fonts.primary,
  height: "100%",
  [theme.breakpoints.down("md")]: {
    padding: "20px 16px",
  },
}));

export const ImageFlex = styled("div")(() => ({
  flex: 1,
  backgroundColor: palette.grey[50],
  width: "100%",
  height: "100%",
  fontFamily: fonts.primary,
  borderRadius: "25px",
}));

export const SignUpImageBox = styled("div")(() => ({
  width: "50%",
  height: "auto",
  "@media(max-width: 468px)": {
    display: "none",
  },
  "@media(max-width: 1338px)": {
    width: "100%",
  },
}));

export const AllImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    width: "95%",
    margin: "0 auto",
    padding: "18px",
  },
}));

export const StyledHeader = styled("div")(() => ({
  marginBottom: "20px",
  fontFamily: fonts.primary,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: typeset.h4.fontSize,
  fontWeight: 300,
  fontFamily: fonts.primary,
  color: palette.text.primary,
  margin: "0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: typeset.subtitle2.fontSize,
  fontWeight: 300,
  fontFamily: fonts.primary,
  color: palette.text.secondary,
  margin: "0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: typeset.caption.fontSize,
  color: palette.error.main,
  fontFamily: fonts.primary,
}));

// Profile picture

export const LabelProfile = styled("label")(() => ({
  position: "absolute",
  bottom: "5px",
  right: "10px",
  backgroundColor: palette.white.main,
  borderRadius: "50%",
  padding: "4px",
  cursor: "pointer",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
}));

export const MainUploadImage = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  overflow: "hidden",
  boxShadow: theme.shadows[2],
}));

export const ProfileUploadImg = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const CameraBtn = styled("img")(() => ({
  width: "15px",
  height: "15px",
}));

export const InputImg = styled("input")(() => ({
  display: "none",
}));

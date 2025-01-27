import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import palette from "../../thems/primitives/palette";
import { BOX_SHADOW } from "../../thems/primitives/colors";
import fonts from "../../thems/primitives/fonts";
import typeset from "../../thems/primitives/typeset";

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  fontFamily: fonts.primary,
  alignItems: "center",
  minHeight: "92vh",
  backgroundColor: palette.white.main,
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
  boxShadow: `0px 0px 100px 10px ${BOX_SHADOW}`,

  overflow: "hidden",
  // [theme.breakpoints.down("lg")]: {
  //   flexDirection: "column",
  //   maxWidth: "1200px",
  // },
  // [theme.breakpoints.down("md")]: {
  //   maxWidth: "700px",
  // },
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

export const ChildFlex = styled("div")(({ theme }) => ({
  flex: 1,
  padding: "35px 100px",
  display: "flex",
  marginBottom: "auto",
  flexDirection: "column",
  overflow: "hidden",
  height: "100%",
  marginTop: "auto",
  [theme.breakpoints.down("md")]: {
    padding: "20px 16px",
  },
}));

export const ImageFlex = styled("div")(() => ({
  width: "50%",
  height: "auto",

  "@media(max-width: 468px)": {
    display: "none",
  },
  "@media(max-width: 1338px)": {
    width: "100%",
  },
}));

export const AllImg = styled("img")(() => ({
  width: "100%",
  height: "100%",

  "@media (max-width: 768px)": {},

  "@media (max-width: 480px)": {
    display: "none",
  },
}));

export const StyledHeader = styled("div")(() => ({
  marginBottom: "20px",
}));

export const Logo = styled("img")(() => ({
  marginBottom: "20px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: typeset.h4.fontSize,
  fontWeight: "300",
  lineHeight: "30px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: typeset.h5.fontSize,
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  // fontSize: "14px",
  fontSize: typeset.button.fontSize,
  fontWeight: "300",
  color: palette.rateSheduleColors.colorB,
  margin: "0",
  [theme.breakpoints.down("sm")]: {
    fontSize: typeset.caption.fontSize,
  },
}));

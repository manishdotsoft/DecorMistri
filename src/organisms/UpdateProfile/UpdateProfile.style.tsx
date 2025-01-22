import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  fontFamily: "sans-serif",
  alignItems: "center",
  minHeight: "92vh",
  backgroundColor: "#ffffff",
  padding: "16px",

  // width: "100%",

  // flexDirection: "column",
  "@media(max-width: 468px)": {
    padding: "0px",
    marginTop: "35px",
  },
}));

export const MainFlex = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  fontFamily: "sans-serif",
  // maxWidth: "1400px",
  backgroundColor: "#ffffff",
  borderRadius: "25px",
  boxShadow: "0px 0px 100px 10px rgba(0, 0, 0, 0.3)",

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
export const StyledForm = styled("form")(() => ({
  fontFamily: "sans-serif",
}));

export const Logo = styled("img")(() => ({
  height: "50px",
}));

export const ParentInputBox = styled("div")(() => ({
  fontFamily: "sans-serif",
  width: "100%",
  // marginRight: "30px",
  "@media(max-width: 468px)": {},
}));

export const TextArea = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  fontFamily: "sans-serif",

  gap: "10px",
}));

export const TextArea2 = styled("div")(() => ({
  fontFamily: "sans-serif",
}));

export const ChildFlex = styled("div")(({ theme }) => ({
  flex: 1,
  padding: "35px 100px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  fontFamily: "sans-serif",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    padding: "20px 16px",
  },
}));

export const ImageFlex = styled("div")(() => ({
  flex: 1,
  backgroundColor: "#f7f7f7",
  width: "100%",
  height: "100%",
  fontFamily: "sans-serif",

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
  fontFamily: "sans-serif",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2.3rem",
  fontWeight: "300",
  fontFamily: "sans-serif",

  color: "#000000",
  margin: "0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "300",
  fontFamily: "sans-serif",

  color: "##000000",
  margin: "0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: "12px",
  color: "#d32f2f",
  fontFamily: "sans-serif",

  // marginTop: "5px",
}));

export const StyledBoxCenter = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "sans-serif",
  gap: "10px",
  marginTop: "20px",
}));

export const StyledLink = styled("span")(() => ({
  color: "#7d22c3",
  fontWeight: "bold",
  cursor: "pointer",
  fontFamily: "sans-serif",

  textDecoration: "none",
}));

export const ProgressBar1 = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  marginTop: "3px",
}));

export const ProgressBar = styled("div")(() => ({
  display: "flex",

  gap: "5px",
  width: "80%",
}));

// -- profile picture

export const LabelProfile = styled("label")(() => ({
  position: "absolute",
  bottom: "5px",
  right: "10px",
  backgroundColor: "white",
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

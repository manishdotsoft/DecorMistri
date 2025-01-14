import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f7f7f7",
  padding: "16px",
}));

export const MainFlex = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "1400px",
  backgroundColor: "#ffffff",
  borderRadius: "25px",
  boxShadow: "0px 0px 100px 10px rgba(0, 0, 0, 0.3)",
  width: "100%",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const ChildFlex = styled("div")(({ theme }) => ({
  flex: 1,
  padding: "35px 100px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
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
  borderRadius: "25px",
}));

export const AllImg = styled("img")(({ theme }) => ({
  width: "50%",
  maxWidth: "100%",
  height: "auto",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    margin: "0 auto",
  },
}));

export const StyledHeader = styled("div")(() => ({
  marginBottom: "20px",
}));

export const Logo = styled("img")(() => ({
  marginBottom: "20px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2.1rem",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "30px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "300",
  color: "#363636",
  margin: "0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

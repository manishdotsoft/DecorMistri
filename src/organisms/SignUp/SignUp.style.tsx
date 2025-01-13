import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f7f7f7",
}));

export const MainFlex = styled("div")(() => ({
  display: "flex",
  width: "80%",
  maxWidth: "1600px",
  backgroundColor: "#ffffff",
  borderRadius: "20px",

  boxShadow: "0px 0px 100px 10px rgba(0, 0, 0, 0.2)",
}));

export const StyledForm = styled("form")(() => ({}));
export const TextArea = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

export const TextArea2 = styled("div")(() => ({}));

export const ChildFlex = styled("div")(() => ({
  flex: 1,
  padding: "40px 100px",
  display: "flex",
  flexDirection: "column",
}));

export const ImageFlex = styled("div")(() => ({
  flex: 1,
  backgroundColor: "#f7f7f7",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const AllImg = styled("img")(() => ({
  width: "",

  height: "100%",
}));

export const StyledHeader = styled("div")(() => ({
  marginBottom: "20px",
}));

export const Logo = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "10px",
}));

export const Title = styled(Typography)(() => ({
  fontSize: "44px",
  fontWeight: "300",
  color: "#000000",
  margin: "0",
}));

export const Title2 = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "300",
  color: "#363636",
  margin: "0",
}));

export const StyledTypography = styled("p")(() => ({
  fontSize: "12px",
  color: "#d32f2f",
  marginTop: "5px",
}));

export const StyledBoxCenter = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
}));

export const StyledLink = styled("span")(() => ({
  color: "#7d22c3",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "none",
}));

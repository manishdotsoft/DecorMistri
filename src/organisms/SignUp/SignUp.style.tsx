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
  maxWidth: "1200px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  // overflow: "hidden",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
}));

export const StyledForm = styled("div")(() => ({}));
export const TextArea = styled("div")(() => ({}));

export const ChildFlex = styled("div")(() => ({
  flex: 1,
  padding: "40px 60px",
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
  width: "650px",
  // objectFit: "cover",
  // maxHeight: "100%",
  height: "100%",
}));

export const StyledHeader = styled("div")(() => ({
  marginBottom: "20px",
  textAlign: "center",
}));

export const Logo = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "10px",
}));

export const Title = styled("h1")(() => ({
  fontSize: "24px",
  fontWeight: "700",
  color: "#7d22c3",
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

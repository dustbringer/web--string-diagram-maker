import React from "react";
import { styled } from "@mui/system";
// import styled from '@emotion/styled';
// For examples on how to use emotion styling, see https://mui.com/system/styled/
import "./global.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import Container from "./components/Container";
import DiagramMaker from "./components/DiagramMaker";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2f3241",
    },
    secondary: {
      main: "#7a7f95",
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
    fontSize: 14,
    h1: {
      fontSize: "3.75rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "3.25rem",
      fontWeight: 400,
    },
  },
});

function App() {
  const [mode, setMode] = React.useState("line");

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          String Diagram Maker
        </Typography>

        <div>
          <Button
            variant={mode === "line" ? "contained" : "outlined"}
            size="small"
            disableElevation
            onClick={() => setMode("line")}
          >
            Line
          </Button>
          <Button
            variant={mode === "dot" ? "contained" : "outlined"}
            size="small"
            disableElevation
            onClick={() => setMode("dot")}
          >
            Dot
          </Button>
        </div>

        <DiagramMaker mode={mode} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

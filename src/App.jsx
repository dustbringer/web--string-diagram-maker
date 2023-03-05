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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";

import Container from "./components/Container";
import DiagramMaker from "./components/DiagramMaker";
import toTikz from "./util/toTikz";

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
  const [width, setWidth] = React.useState(5);
  const [height, setHeight] = React.useState(4);
  const [dispScale, setDispScale] = React.useState(120);
  const [mode, setMode] = React.useState("line");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dots, setDots] = React.useState([]);
  const [lines, setLines] = React.useState([]);
  const [tikz, setTikz] = React.useState("");
  const [outputScale, setOutputScale] = React.useState(2);

  const exportTikz = () => {
    setTikz(toTikz(width, height, dots, lines, outputScale));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          String Diagram Maker
        </Typography>
        <Box sx={{ margin: "5px 0" }}>
          <TextField
            label="Width"
            type="number"
            variant="outlined"
            size="small"
            value={width}
            onChange={(e) => setWidth(Math.max(1, e.target.value))}
          />
          <TextField
            label="Height"
            type="number"
            variant="outlined"
            size="small"
            value={height}
            onChange={(e) => setHeight(Math.max(1, e.target.value))}
          />
          <TextField
            label="Display Scale"
            type="number"
            variant="outlined"
            size="small"
            value={dispScale}
            onChange={(e) => setDispScale(Math.max(1, e.target.value))}
          />
        </Box>

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

        <DiagramMaker
          width={width}
          height={height}
          dispScale={dispScale}
          mode={mode}
          onChange={(d, l) => {
            setDots(d);
            setLines(l);
          }}
        />

        <Box sx={{ margin: "5px 0" }}>
          <TextField
            label="Output Scale"
            type="number"
            variant="outlined"
            size="small"
            inputProps={{
              step: "0.1",
            }}
            value={outputScale}
            onChange={(e) => setOutputScale(Math.max(1, e.target.value))}
          />
          <Button
            variant="outlined"
            size="small"
            disableElevation
            onClick={() => {
              exportTikz();
              setDialogOpen(true);
            }}
          >
            Export to TikZ
          </Button>
        </Box>

        {/* Export to tikz code */}
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
        >
          <DialogContent>
            <TextField
              size="small"
              multiline
              rows={16}
              placeholder="Empty"
              InputProps={{
                readOnly: true,
                classes: {
                  input: {
                    fontSize: "0.8em",
                    whiteSpace: "pre",
                  },
                },
              }}
              defaultValue={tikz}
              autoFocus
              // onFocus={(e) => e.target.select()}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}

export default App;

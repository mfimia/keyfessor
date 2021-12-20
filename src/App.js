import React, { useState, useEffect } from "react";
import "./main.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";
import "./css/screenSizes.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  p: 4,
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [wideScreen, setWideScreen] = useState(true);

  const firstScreenHeight = window.innerHeight >= 750 ? true : false;
  const firstScreenWidth = window.innerWidth >= 900 ? true : false;
  const enoughFirstSize = (firstScreenHeight && firstScreenWidth) || false;

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleResize = () => {
    window.innerWidth <= 900 || window.innerHeight <= 750
      ? setWideScreen(false)
      : setWideScreen(true);
  };

  useEffect(() => window.addEventListener("resize", handleResize), []);

  const appClass = darkMode ? "App-dark" : "App";
  return enoughFirstSize && wideScreen ? (
    <div className={appClass}>
      <Navbar darkMode={darkMode} />
      <Main darkMode={darkMode} />
      <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  ) : (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Your screen is too small!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Your screen is too small to use Keyfessor. Please use a larger screen
          or expand your current one.
        </Typography>
      </Box>
    </Modal>
  );
}

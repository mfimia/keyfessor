import { useState, useEffect, useContext } from "react";
import DarkContext from "./context/darkMode/DarkContext";
import "./main.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Navbar from "./components/layout/Navbar";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";
import "./css/screenSizes.css";

const enoughFirstSize = window.innerWidth >= 900 && window.innerHeight >= 450;

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
  const [wideScreen, setWideScreen] = useState(true);

  const darkContext = useContext(DarkContext);
  const { darkMode } = darkContext;

  const handleResize = () => {
    window.innerWidth <= 900 || window.innerHeight <= 450
      ? setWideScreen(false)
      : setWideScreen(true);
  };

  useEffect(() => window.addEventListener("resize", handleResize), []);

  return enoughFirstSize && wideScreen ? (
    <div className={darkMode ? "App-dark" : "App"}>
      <Navbar />
      <Main />
      <DarkMode />
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

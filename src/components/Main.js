import { useContext, Fragment } from "react";
import MainContext from "../context/main/MainContext";
import Text from "./Text";
import Tracker from "./layout/Tracker";
import EndScreen from "./layout/modals/EndScreen";
import Keyboard from "./layout/Keyboard";
import Results from "./layout/Results";
import { Box } from "@mui/material";

export default function Main() {
  const mainContext = useContext(MainContext);
  const { endGame } = mainContext;

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
        component="div"
      >
        <Results />
        <Box
          sx={{
            height: "90vh",
          }}
        >
          <Text />
          <Keyboard />
        </Box>
        <Tracker />
      </Box>
      {endGame.current && <EndScreen />}
    </Fragment>
  );
}

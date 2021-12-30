import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const ScreenAlert = () => {
  return (
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
};

export default ScreenAlert;

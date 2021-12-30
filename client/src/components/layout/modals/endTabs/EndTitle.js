import { Fragment } from "react";
import { Typography, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const iconStyle = {
  fontSize: {
    xs: "16px",
    md: "20px",
    lg: "22px",
    xl: "28px",
  },
  color: "goldenrod",
  p: 0,
};

const titleBreakpoints = {
  xs: "20px",
  md: "22px",
  lg: "24px",
  xl: "28px",
};

const EndTitle = ({ finalScore }) => {
  const { title, overallRating } = finalScore;

  const { scoreTitle, titleColor } = title;

  return (
    <Fragment>
      <Typography
        fontFamily="Righteous"
        id="end-screen-modal-title"
        variant="h3"
        component="h3"
      >
        Congrats!
      </Typography>
      <Typography
        fontFamily="Righteous"
        id="end-screen-modal-description"
        sx={{ my: 2 }}
      >
        Your Keyfessor title is:
      </Typography>
      <Typography
        sx={{ fontSize: titleBreakpoints }}
        fontFamily="Righteous"
        color={titleColor}
        fontWeight={700}
        letterSpacing={2}
      >
        {scoreTitle.toUpperCase()}
      </Typography>
      <Rating
        sx={iconStyle}
        precision={0.1}
        name="Title-score"
        value={overallRating}
        readOnly
        emptyIcon={<StarIcon style={{ opacity: 0.1 }} sx={iconStyle} />}
      />
    </Fragment>
  );
};

export default EndTitle;

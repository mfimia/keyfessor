import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CircularProgressWithLabel = ({ value, unit, percentage, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            lg: 28,
            xl: 32,
          },
        }}
        component="h5"
        variant="h6"
      >
        {title}:
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          width: {
            xs: 64,
            lg: 80,
            xl: 100,
          },
        }}
      >
        <CircularProgress
          size={"100%"}
          variant="determinate"
          value={percentage ? percentage : value}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize={20}
            variant="caption"
            component="div"
            color="text.secondary"
            sx={{
              fontSize: {
                xs: 20,
                lg: 24,
                xl: 28,
              },
            }}
          >
            {unit === "WPM" ? (
              <Typography
                fontSize={10}
                sx={{
                  fontSize: {
                    xs: 10,
                    lg: 12,
                    xl: 14,
                  },
                }}
                component="span"
              >
                <Typography
                  fontSize={20}
                  sx={{
                    fontSize: {
                      xs: 20,
                      lg: 24,
                      xl: 28,
                    },
                  }}
                  component="span"
                >
                  {value !== Infinity || NaN ? Math.round(value) : 0}
                </Typography>{" "}
                WPM
              </Typography>
            ) : (
              `${Math.round(value)}%`
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;

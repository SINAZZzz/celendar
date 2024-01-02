import Header from "./component/Header";
import { days } from "../../Data/data";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customCard: {
    backgroundColor: theme.palette.primary.background,
    border: theme.palette.primary.border,
  },
  customContentCard: {
    fontWeight: theme.palette.primary.bold,
    fontFamily: "YekanBakh",
  },
}));

export default function Calendar() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box display="flex" justifyContent="center">
        {days.map((item, index) => (
          <Typography key={index} px="4%">
            {item}
          </Typography>
        ))}
      </Box>

      <Box>
        <Box
          className={classes.customCard}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            px: "2rem",
            py: "2rem",
            borderRadius: "5px",
            width: "fit-content",
          }}
        >
          <Typography variant="body1">
            <Box
              className={classes.customContentCard}
              // component="p"
              sx={{
                background: "rgba(220,220,220 , 0.40)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                // px: "15px",
                // py: "10px",
              }}
            >
              1
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

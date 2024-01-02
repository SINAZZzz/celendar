import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useDarkMode } from "../../../context/DarkModeContext";
import { CssBaseline } from "@mui/material";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Box>
      <CssBaseline />

      <Grid container spacing={2} p="1rem">
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" pt="0.5rem">
            <ArrowBackIosNewIcon fontSize="5px" sx={{ cursor: "pointer" }} />
            <Typography variant="body1" px="3rem">
              بهمن
            </Typography>
            <ArrowForwardIosIcon fontSize="5px" sx={{ cursor: "pointer" }} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Typography variant="body1" pr="4px" fontWeight="bold">
              برنامه هفتگی
            </Typography>
            <CalendarMonthIcon />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

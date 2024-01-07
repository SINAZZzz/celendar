import { useState } from "react";

import {
  Grid,
  Box,
  Typography,
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
// icons
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useDarkMode } from "../../../context/DarkModeContext";

import useWindowSize from "../../../Util/Utility";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [value, setValue] = useState(0);
  const { width } = useWindowSize();

  return (
    <Box>
      <CssBaseline />
      {width < 900 ? (
        <>
          <Box>
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <BottomNavigation
            sx={{
              width: "100%",
              position: "fixed",
              bottom: 0,
              borderTop: "solid 1px  rgb(210, 207, 207)",
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Box display="flex" alignItems="center" pt="0.25rem">
              <BottomNavigationAction
                label="ArrowBack"
                icon={<ArrowBackIosNewIcon fontSize="small" />}
              />

              <Typography
                variant="body1"
                px="6rem"
                fontSize="1.2rem"
                fontWeight="bold"
              >
                بهمن
              </Typography>
              <BottomNavigationAction
                label="ArrowForward"
                icon={<ArrowForwardIosIcon fontSize="small" />}
              />
            </Box>
          </BottomNavigation>
        </>
      ) : (
        <Grid container spacing={2}>
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
      )}
    </Box>
  );
}

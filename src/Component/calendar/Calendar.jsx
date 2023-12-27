// icon
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState } from "react";

export default function Calendar() {
  const [dark, setDark] = useState("false");
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" pt="0.5rem">
            <ArrowBackIosNewIcon fontSize="5px" />
            <Typography variant="body1" color="initial" px="3rem">
              بهمن
            </Typography>
            <ArrowForwardIosIcon fontSize="5px" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <IconButton color="inherit" onClick={() => setDark(!dark)}>
              {dark ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            <Typography
              variant="body1"
              color="initial"
              pr="4px"
              fontWeight="bold"
            >
              برنامه هفتگی
            </Typography>
            <CalendarMonthIcon />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

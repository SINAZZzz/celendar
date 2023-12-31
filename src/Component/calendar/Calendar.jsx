import Header from "./component/Header";
import { days } from "../../Data/data";
import {
  Card,
  CardContent,
  Button,
  CardActions,
  Typography,
  Box,
} from "@mui/material";

export default function Calendar() {
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
          sx={{
            alignItems: "center",
            justifyContent: "center",
            px: "3rem",
            py: "2rem",
            borderRadius: "5px",
            width: "fit-content",
            background: "rgba(0 , 0 ,0 , 0.20)",
          }}
        >
          <Typography variant="body1">1</Typography>
        </Box>
      </Box>
    </Box>
  );
}

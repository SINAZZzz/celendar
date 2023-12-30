import Header from "./component/Header";
import days from "../../Data/data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
      {/* <Box>
        <Card  sx={{ width: 275, background: "" }}>
          <CardContent>dasd</CardContent>
          <CardActions>
            <Button variant="text" color="warning" size="small">
              Learn more
            </Button>
          </CardActions>
        </Card>
      </Box> */}
    </Box>
  );
}

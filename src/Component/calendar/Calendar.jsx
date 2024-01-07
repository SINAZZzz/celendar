import Header from "./component/Header";
import { days, number } from "../../Data/data";
import { Typography, Box, Grid, Container } from "@mui/material";

export default function Calendar() {
  return (
    <Container>
      <Box>
        <Header />
        <Grid direction="row-reverse" container>
          {days.map((item, index) => (
            <Grid
              key={index}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                py: "1rem",
              }}
              item
              xs={12}
              md={1.6}
              sm={1.6}
              lg={1.714285}
            >
              {item}
            </Grid>
          ))}
          {number.map((d, index) => (
            <Grid key={index} item xs={12} md={1.6} sm={1.6} lg={1.714285}>
              <Box
                component="div"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  m: "3px",
                  py: "10%",
                  borderRadius: "5px",
                  background: (theme) => theme.palette.primary.background,
                  border: (theme) => theme.palette.primary.border,
                }}
              >
                <Typography variant="body1">
                  <Box
                    component="p"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      fontSize: "30px",
                      width: "50px",
                      height: "50px",
                      fontWeight: (theme) => theme.palette.primary.bold,
                      background: (theme) => theme.palette.primary.backp,
                      fontFamily: "YekanBakh",
                    }}
                  >
                    {d}
                  </Box>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

import Header from "./component/Header";
import { days, number } from "../../Data/data";
import { Typography, Box, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customCard: {
    backgroundColor: theme.palette.primary.background,
    border: theme.palette.primary.border,
  },
  customContentCard: {
    fontWeight: theme.palette.primary.bold,
    background: theme.palette.primary.backp,
    fontFamily: "YekanBakh",
  },
}));

export default function Calendar() {
  const classes = useStyles();

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
                // mx: "1px",
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
                className={classes.customCard}
                component="div"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  m: "3px",
                  py: "10%",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="body1">
                  <Box
                    className={classes.customContentCard}
                    component="p"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      fontSize: "30px",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    {d}
                  </Box>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* <Box display="flex" justifyContent="center">
        {days.map((item, index) => (
          <Typography key={index} px="4%">
            {item}
          </Typography>
        ))}
      </Box> */}

        {/* <Grid direction="row-reverse" container>
        {number.map((d, index) => (
          <Grid
            key={index}
            className={classes.customCard}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              mx: "1px",
              py: "1rem",
              borderRadius: "5px",
            }}
            item
            xs={12}
            md={1.6}
            sm={1.6}
            lg={1.714285}
          >
            <Typography variant="body1">
              <Box
                className={classes.customContentCard}
                component="p"
                sx={{
                  background: "rgba(220,220,220 , 0.40)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  height: "30px",
                }}
              >
                {d}
              </Box>
            </Typography>
          </Grid>
        ))}
      </Grid> */}
        {/* <Box>
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
      </Box> */}
      </Box>
    </Container>
  );
}

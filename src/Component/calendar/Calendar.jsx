import Header from "./component/Header";
import { days, number } from "../../Data/data";
import { Box, Grid, Container, Typography } from "@mui/material";
import useWindowSize from "../../Util/Utility";

export default function Calendar() {
  const { width } = useWindowSize();
  return (
    <>
      <Header />

      {width < 900 ? (
        <Container>
          <Box>
            <Grid direction="row-reverse" container>
              {number.map((d, index) => (
                <Grid key={index} item xs={12} md={1.6} sm={1.6} lg={1.714285}>
                  <Box
                    component="div"
                    sx={{
                      alignItems: "center",
                      justifyContent: "right",
                      display: "flex",
                      py: "10px",
                      pr: "15px",
                      my: "0.25rem",
                      borderRadius: "10px",
                      background: (theme) => theme.palette.primary.background,
                      border: (theme) => theme.palette.primary.border,
                    }}
                  >
                    <Box variant="div" sx={{ mr: "7rem" }}>
                      روز کاری
                    </Box>
                    <Box
                      sx={{
                        display: "block",
                        textAlign: "center",
                        borderRadius: "50%",
                        fontSize: "30px",
                        width: "65px",
                        height: "65px",
                        fontWeight: (theme) => theme.palette.primary.bold,
                        background: (theme) => theme.palette.primary.backp,
                        fontFamily: "YekanBakh",
                      }}
                    >
                      {d}
                      <Typography
                        variant="body1"
                        sx={{ fontSize: "15px", m: "-10px" }}
                      >
                        {days[0]}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box>
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
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
}

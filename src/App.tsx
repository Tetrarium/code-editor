import { Box, createTheme, Grid2 as Grid, ThemeProvider } from "@mui/material";

import Layout from "./components/layout";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 6 }}>
            task
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box>
              editor
            </Box>
            <Box>
              result
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

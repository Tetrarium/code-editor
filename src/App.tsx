import { Box, createTheme, Grid2 as Grid, ThemeProvider } from "@mui/material";

import Layout from "./components/layout";
import Section from "./components/sections/section";
import TaskBoard from "./components/sections/task-board";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#222',
      dark: '#333',
      light: '#800'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 6 }} alignItems='stretch'>
            <TaskBoard />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} >
            <Box display="flex" gap={1} flexDirection="column" height={'100%'}>
              <Section>
                <>Editor</>
                <>Editor Content</>
              </Section>
              <Section>
                <>Result header</>
                <>Result Content</>
              </Section>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

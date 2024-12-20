import { useEffect } from "react";

import { Box, createTheme, Grid2 as Grid, ThemeProvider } from "@mui/material";

import Layout from "./components/layout";
import CodeEditor from "./components/sections/code-editor";
import ResultBoard from "./components/sections/result-board";
import TaskBoard from "./components/sections/task-board";
import { makeServer } from "./fakeApi/fakeApi";
import { ResultProvider } from "./store/resultProvider";

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
  useEffect(() => {
    const server = makeServer();

    return () => {
      server.shutdown();
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <ResultProvider>
        <Layout>
          <Grid container spacing={1} alignItems='stretch'>
            <Grid size={{ xs: 12, md: 6 }} >
              <TaskBoard />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} >
              <Box display="flex" gap={1} flexDirection="column" height={'100%'}>
                <CodeEditor />
                <ResultBoard />
              </Box>
            </Grid>
          </Grid>
        </Layout>
      </ResultProvider>
    </ThemeProvider>
  );
}

export default App;

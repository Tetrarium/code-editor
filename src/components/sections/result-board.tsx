import { useResult } from "@/store/resultContext";
import { Box, Typography } from "@mui/material";

import Section from "./section";

const ResultBoard = () => {
  const result = useResult();
  console.log(result);

  return (
    <Section>
      <Typography variant="h6" component="h3">Результаты</Typography>
      <Box minHeight={100}>{result ? result.message : ''}</Box>
    </Section>
  );
};

export default ResultBoard;
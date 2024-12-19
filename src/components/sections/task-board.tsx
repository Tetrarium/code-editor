import { Box } from "@mui/material";

import Section from "./section";

const TaskBoard = () => {
  return (
    <Section height={'100%'}>
      <>Задача</>
      <Box py={2} px={3} sx={{
        '& p': {
          marginBottom: '1em',
        }
      }}>
        <h2>Задача 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit cupiditate consectetur doloribus. Necessitatibus et nemo harum totam? Vel consequatur odio et atque facilis consequuntur, reprehenderit quod iste magnam alias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis nesciunt nulla aliquid iure, optio numquam tenetur, et aperiam at reprehenderit beatae ab aspernatur aliquam deleniti qui odit? Non, esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident porro minima dolores tenetur corporis eum? Harum culpa neque a itaque unde corporis omnis nulla, modi natus iste animi aut!
        </p>
      </Box>
    </Section>
  );
};

export default TaskBoard;
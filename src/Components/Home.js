import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button, Box } from "@mui/material";

const Home = () => {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}>
      <ButtonGroup
        variant="text"
        aria-label="text button group">
          <Button><Link to="/create">Crud Operation</Link></Button>
          <Button><Link to="/reactflow">React Flow Operation</Link></Button>
      </ButtonGroup>
      </Box>
    </>
  );
};

export default Home;

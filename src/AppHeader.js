import * as React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppHeader = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}>
            React Operation
          </Typography>
          {props.user === null ? (
            <Button color="inherit" onClick={props.onSignIn}>Login</Button>
          ) : (
            <div>
              {/* @{props.user.username}{" "} */}
              <Button
                onClick={props.onSignOut}>
                Logout
              </Button>
            </div>
          )}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;

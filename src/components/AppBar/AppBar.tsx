import type { FunctionComponent } from "react";
import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";

interface AppBarProps {
  title: string;
}

export const AppBar: FunctionComponent<AppBarProps> = ({ title }) => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

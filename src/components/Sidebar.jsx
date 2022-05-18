import { AccountBalance, Home, ModeNight, People } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import { PATHS, RESPONSIVE } from "../constants";
const Sidebar = () => {
    return (
        <Box flex="0.5" p={1} sx={RESPONSIVE.HIDE_SM}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/#">
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href={PATHS.DEPARTMENTS}>
                        <ListItemIcon><AccountBalance /></ListItemIcon>
                        <ListItemText primary="Departments" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href={PATHS.EMPLOYEES}>
                        <ListItemIcon><People /></ListItemIcon>
                        <ListItemText primary="Employees" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/#">
                        <ListItemIcon><ModeNight /></ListItemIcon>
                        <Switch />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar;
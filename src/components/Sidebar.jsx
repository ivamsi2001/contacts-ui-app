import { AccountBalance, Home, People } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { PATHS } from "../constants";

const Sidebar = () => {
    return (
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
        </List>
    )
}

export default Sidebar;
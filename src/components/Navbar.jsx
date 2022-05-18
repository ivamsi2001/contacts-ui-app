
import React, { useState } from "react";
import { AspectRatio, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, Drawer, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { RESPONSIVE } from "../constants";
import Sidebar from "./Sidebar";

const Searchbar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));


const Userbox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    
    return (
        <AppBar position="sticky">
            <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>

                <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={RESPONSIVE.SHOW_SM} onClick={() => setOpenDrawer(!openDrawer)} color="inherit">
                        <AspectRatio onClick={() => setOpenDrawer(!openDrawer)} sx={RESPONSIVE.SHOW_SM} />
                    </IconButton>
                    <IconButton sx={RESPONSIVE.HIDE_SM} color="inherit" href="/#">
                        <AspectRatio sx={RESPONSIVE.HIDE_SM} />
                    </IconButton>
                    <Typography variant="h6" sx={RESPONSIVE.HIDE_SM}>GrowDNA</Typography>
                </Box>

                <Searchbar><InputBase placeholder="Search..." /></Searchbar>

                <Icons>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={2} color="error">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Avatar sx={{ width: 30, height: 30 }} onClick={e => setOpen(true)} />
                    </IconButton>
                </Icons>

                <Userbox onClick={e => setOpen(true)}>
                    <IconButton color="inherit">
                        <Avatar sx={{ width: 30, height: 30 }} />
                    </IconButton>
                </Userbox>

                <Menu open={open} onClose={e => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </Toolbar>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Sidebar />
            </Drawer>
        </AppBar>
    )
}

export default Navbar;
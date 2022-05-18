
import React, { useState } from "react";
import { AspectRatio, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Stack, styled, Toolbar, Typography } from "@mui/material";
import { RESPONSIVE } from "../constants";

const Styledtoolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

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
    return (
        <AppBar position="sticky">
            <Styledtoolbar>
                <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
                    <AspectRatio />
                    <Typography variant="h6" sx={RESPONSIVE.HIDE_SM}>GrowDNA</Typography>
                </Stack>
                <Searchbar><InputBase placeholder="Search..." /></Searchbar>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} onClick={e => setOpen(true)} />
                </Icons>
                <Userbox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }}/>
                </Userbox>
                <Menu
                    open={open}
                    onClose={e => setOpen(false)}
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
            </Styledtoolbar>
        </AppBar>
    )
}

export default Navbar;
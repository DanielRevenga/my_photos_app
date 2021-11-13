import React from "react";
import { Typography, AppBar, CssBaseline, Toolbar, Button } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import "../../styles/MainNavigation.scss";
import { Link } from "react-router-dom";

function MainNavigation() {

    return (
        <div id="MainNavigation">
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar className="toolbar flex">
                    <PhotoCameraIcon className="icon" />
                    <Typography className="alignRight" variant="h6">
                        Photo Album
                    </Typography>

                    <div className="toolbarRight flex">
                        <Button variant="contained" color="primary">
                            <Link to="/">Dashboard</Link>
                        </Button>

                        <Button variant="contained" color="primary">
                            <Link to="my-photos">My Photos</Link>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>      
        </div>
    );
}

export default MainNavigation;
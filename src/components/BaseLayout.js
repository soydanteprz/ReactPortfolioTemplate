import React, { useState } from "react";
import Style from "./BaseLayout.module.scss";
import NavBar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(false);

    function handleClick() {
        setDarkMode(!darkMode);
    }

    return (
        <Box className={darkMode ? Style.dark : Style.light}>
            <Grid
                container
                display={"flex"}
                flexDirection={"column"}
                minHeight={"100vh"}
                justifyContent={"space-between"}
            >
                <Grid item>
                    <NavBar darkMode={darkMode} handleClick={handleClick} />
                </Grid>
                <Grid item flexGrow={1}>
                    <Home />
                    <About />
                    <Portfolio />
                </Grid>
                <Grid item>
                    <Box
                        component={"footer"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        py={"1.5rem"}
                        sx={{ opacity: 0.4 }}
                        width={"100%"}
                    >
                        <p>Dante Pérez 2022 Copyright &copy;</p>
                        <p>Dante Pérez´s website is Powered by React Appp</p>
                        <p>&copy; 2022</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

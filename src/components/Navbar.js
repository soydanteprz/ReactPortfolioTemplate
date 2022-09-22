import React, { useState, useEffect } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { info } from "../info/Info";

/*
const links = [
    {
        name: "<Home>",
        to: "",
        active: "home",
    },
    {
        name: "<About Me>",
        to: "/about",
        active: "about",
    },
    {
        name: info.initials,
        type: "initials",
        to: "/",
        active: "home",
    },
    {
        name: "<Portfolio>",
        to: "/portfolio",
        active: "portfolio",
    },
];
*/

export default function NavBar({ darkMode, handleClick }) {
    /*
    const location = useLocation();
    const [active, setActive] = useState(
        location.pathname === "/"
            ? "home"
            : location.pathname.slice(1, location.pathname.length)
    );
    */

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Box
            component={"nav"}
            width={"100%"}
            className={scrolled ? "scrolled" : ""}
        >
            <Box
                component={"li"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ xs: "2rem", md: "8rem" }}
                textTransform={"none"}
                fontSize={"1rem"}
            >
                <Box
                    component={"li"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={{ xs: "2rem", md: "8rem" }}
                    textTransform={"none"}
                    fontSize={"1rem"}
                    sx={{ borderImageSource: info.gradient }}
                    className={Style.active}
                >
                    <Nav.Link
                        href="#home"
                        className={
                            activeLink === "home"
                                ? "active navbar-link"
                                : "navbar-link"
                        }
                        onClick={() => onUpdateActiveLink("home")}
                    >
                        {" "}
                        <p style={{ paddingBottom: "0.5rem" }}>Home</p>
                    </Nav.Link>
                    <Nav.Link
                        href="#about"
                        className={
                            activeLink === "about"
                                ? "active navbar-link"
                                : "navbar-link"
                        }
                        onClick={() => onUpdateActiveLink("about")}
                    >
                        {" "}
                        <p style={{ paddingBottom: "0.5rem" }}>About</p>
                    </Nav.Link>
                    <Nav.Link
                        href="#portfolio"
                        className={
                            activeLink === "portfolio"
                                ? "active navbar-link"
                                : "navbar-link"
                        }
                        onClick={() => onUpdateActiveLink("portfolio")}
                    >
                        {" "}
                        <p style={{ paddingBottom: "0.5rem" }}>Portfolio</p>
                    </Nav.Link>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </Box>
            </Box>
        </Box>
    );
}

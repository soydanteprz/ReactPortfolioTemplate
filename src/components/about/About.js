import React, { useState, useEffect } from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { Fade, Zoom, Slide } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import WordCloud from "./Skills";

export default function About() {
    const firstName = info.firstName.toLowerCase();
    //const [scrolling, setScrolling] = useState(false);
    //const trigger = useScrollTrigger();
   // const [scrolled, setScrolled] = useState(true);
   /*
    const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
});
*/




    function aboutMeText() {
        return (
            <>
                <p>
                    <span style={{ color: info.baseColor }}>
                        {firstName}
                        {info.lastName.toLowerCase()} $
                    </span>{" "}
                    git {firstName}{" "}
                </p>
                <p>
                    <span style={{ color: info.baseColor }}>
                        about{firstName}{" "}
                        <span className={Style.green}>(main)</span> ${" "}
                    </span>
                    {info.bio}
                </p>
            </>
        );
    }

    function skillsText() {
        return (
            <>
                <p>
                    <span style={{ color: info.baseColor }}>
                        {firstName}
                        {info.lastName.toLowerCase()} $
                    </span>{" "}
                    cd skills/tools
                </p>
                <p>
                    <span style={{ color: info.baseColor }}>
                        skills/tools <span className={Style.green}>(main)</span>{" "}
                        $
                    </span>{" "}
                    ls
                </p>
                <p style={{ color: info.baseColor }}> Proficient With</p>
                <ul className={Style.skills}>
                    {info.skills.proficientWith.map((proficiency) => (
                        <li>{proficiency}</li>
                    ))}
                </ul>
                <p style={{ color: info.baseColor }}> Exposed To</p>
                <ul className={Style.skills}>
                    {info.skills.exposedTo.map((skill) => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </>
        );
    }

    function miscText() {
        return (
            <>
                <p>
                    <span style={{ color: info.baseColor }}>
                        {firstName}
                        {info.lastName.toLowerCase()} $
                    </span>{" "}
                    cd hobbies/interests
                </p>
                <p>
                    <span style={{ color: info.baseColor }}>
                        hobbies/interests{" "}
                        <span className={Style.green}>(main)</span> $
                    </span>{" "}
                    ls
                </p>
                <ul>
                    {info.hobbies.map((hobby) => (
                        <li>
                            <Box component={"span"} mr={"1rem"}>
                                {hobby.emoji}
                            </Box>
                            {hobby.label}
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <Box
            display={'flex'}
            flexDirection={"column"}
            alignItems={"center"}
            mt={"3rem"}
            id={"about"}
        >
            <Terminal text={aboutMeText()} />
            <Terminal text={miscText()} />
            <Terminal text={skillsText()} />
            <WordCloud />
        </Box>
    );
}
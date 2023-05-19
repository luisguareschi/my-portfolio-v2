import React, { useState } from 'react';
import styles from './ProjectsPage.module.css';
import TitleSeparator from '@/components/TitleSeparator/TitleSeparator';
import ProjectCard from '@/app/sections/projects/ProjectCard';
import Button from '@/components/Button/Button';
import useWindowSize from "@/functions/useWindowSize";

interface projectInfo {
    title: string;
    description: string;
    tools: string[];
    githubLink?: string;
    projectLink?: string;
}

const projects:projectInfo[] = [
    {
        title: "Trident",
        description: "A Party Game to play with your friends when going out, having a reunion, etc." +
            "The game works in a similar way to Kings Cup, but with domino pieces.",
        tools: ["React Native", "Expo", "Figma"],
        projectLink: "https://beacons.ai/luisguareschi",
    },
    {
        title: "Paso Homes",
        description: "Helping out in a start up by making a home renting website similar using firebase and react. " +
            "The site its still in development.",
        tools: ["React Js", "Firebase", "Google Cloud Platform"]
    },
    {
        title: "Digitalizacion Calidad",
        description: "Webpage made with React Js & Python that serves for " +
            "the quality control of the bolts of the airplane to later be analyzed with Machine Learning to create " +
            "statistical analysis. ",
        tools: ["React Js", "Python", "Typescript", "SQL", "Flask", "Pandas"],
        githubLink: "https://github.com/luisguareschi/digitalizacion-calidad-react"
    },
    {
        title: "Cargas de Maquina JD",
        description: "A webpage that using the company's orders database calculates the distribution for " +
            "how many pieces must be made each day depending on the amount of people available, " +
            "the time it takes to make the piece, the labor days in the calendar, etc.",
        tools: ["React Js", "Python", "Typescript", "SQL", "Flask","Pandas"]
    },
    {
        title: "Bot Creacion de Pedidos",
        description: "A Python application that automatically scans the invoice's from customers using AI and " +
            "then stores them on SAP using .vbs. The application keeps a log of all the uploaded files " +
            "in a database and also lets you select which parts of the invoice you want to upload to SAP.",
        tools: ["Python", "Tkinter", "AI", "SQL", "SAP", "VBS"]
    },
    {
        title: "Whatsapp Me",
        description: "A tool that lets you text a phone number on whatsapp that you haven't added as a contact.",
        tools: ["React Js"],
        githubLink: "https://github.com/luisguareschi/whatsapp-me",
        projectLink: "https://whatsappmyfriends.netlify.app/"
    },
    {
        title: "GPU Manager",
        description: "A Tkinter taskbar application that shows which apps are using the gaming GPU " +
            "of the PC and lets you close each app without having to open the taskbar. " +
            "It also lets you change your monitor's refresh rate without having to open the settings. ",
        tools: ["Python", "Tkinter"],
        githubLink: "https://github.com/luisguareschi/GPU_Manager"
    },
    {
        title: "Tron Reloaded",
        description: "A retro videogame coded in python that emulates the arcade game 'TRON'.",
        tools: ["Python", "Pyxel"],
        githubLink: "https://github.com/luisguareschi/TRON_RELOADED_v2"
    }

]

const ProjectsPage = () => {
    const [showMore, setShowMore] = useState(false);
    const windowSize = useWindowSize()

    const toggleShowMore = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    };

    const displayedProjects = showMore ? projects : projects.slice(0, windowSize.width >= 800 ? 6 : 3);

    return (
        <div className={styles.container} id="worksPage">
            <TitleSeparator number="03" title="My Projects" />
            <div className={styles.title}>
                Here are some of the projects I have worked on throughout my career
            </div>
            <div className={styles.projectsContainer}>
                {displayedProjects.map((project, index) => (
                    <ProjectCard projectInfo={project} key={index} />
                ))}
            </div>
            <Button onClick={toggleShowMore}>
                {showMore ? 'Show Less' : 'Show More'}
            </Button>
        </div>
    );
};

export default ProjectsPage;
export type { projectInfo };

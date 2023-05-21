import styles from "./ProjectCard.module.css";
import {projectInfo} from "@/app/sections/projects/ProjectsPage";
import {FiExternalLink, FiGithub} from "react-icons/fi";
import {CiFolderOn} from "react-icons/ci";
import {motion} from "framer-motion";

interface props {
    projectInfo: projectInfo;
}

const item = {
    hidden: {opacity: 0, scale: 0},
    show: {opacity: 1, scale: 1, transition: {duration: .2}}
}

const ProjectCard = ({projectInfo}:props) => {
    return (
        <motion.div className={styles.container}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    whileHover={{scale: 1.025}}>
            <div className={styles.headerContainer}>
                <CiFolderOn className={styles.folderIcon}/>
                <div className={styles.rightHeader}>
                    {projectInfo.githubLink && (
                        <a href={projectInfo.githubLink} target={"_blank"} className={styles.rightHeader}>
                            <FiGithub className={styles.githubIcon}/>
                        </a>
                    )}
                    {projectInfo.projectLink && (
                        <a href={projectInfo.projectLink} target={"_blank"} className={styles.rightHeader}>
                            <FiExternalLink className={styles.githubIcon}/>
                        </a>
                    )}
                </div>
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.title}>
                    {projectInfo.title}
                </div>
                <div className={styles.description}>
                    {projectInfo.description}
                </div>
                <div className={styles.tools}>
                    {projectInfo.tools.map((tool, index) => {
                        return (
                            <p key={index}>{tool}</p>
                        )})
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard;
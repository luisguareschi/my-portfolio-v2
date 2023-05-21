import styles from "./ProjectCard.module.css";
import {projectInfo} from "@/app/sections/projects/ProjectsPage";
import {FiExternalLink, FiGithub} from "react-icons/fi";
import {CiFolderOn} from "react-icons/ci";
import {motion} from "framer-motion";

interface props {
    projectInfo: projectInfo;
    delay: number
}

const ProjectCard = ({projectInfo, delay}:props) => {
    return (
        <motion.div className={styles.container}
                    whileHover={{scale: 1.025}}
                    initial={{scale: 0, opacity: 0}}
                    exit={{scale: 0, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{delay: delay/20}}>
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
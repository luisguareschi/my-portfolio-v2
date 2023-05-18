import styles from "./WorkInfo.module.css";
import {tabItem} from "@/app/sections/experience/ExperiencePage";
import {motion} from "framer-motion";

interface props {
    item: tabItem;
    selectedTab: number
}

const WorkInfo = ({item, selectedTab}) => {
    if (selectedTab !== item.value) return null
    return (
        <motion.div className={styles.container} initial={{opacity: 0}}
                    animate={{opacity: 1}} transition={{duration: 1}}
                    exit={{opacity: 0}}>
            <div className={styles.titleContainer}>
                <p>
                    {item.jobTitle} <span className={styles.company}>@ {item.company}</span>
                </p>
            </div>
            <div className={styles.dateContainer}>
                {item.startDate[0]} {item.startDate[1]} - {item.endDate[0]} {item.endDate[1]}
            </div>
            <div className={styles.descriptionContainer}>
                <ul>
                    {item.description.map((info, index) => {
                        return (
                            <li key={index} className={styles.descriptionItem}>
                                {info}
                            </li>
                        )})
                    }
                </ul>
                <ul>
                    {item.links?.map((linkInfo, index) => {
                        return (
                            <li key={index} className={styles.descriptionItem}>
                                {linkInfo.name} : <p> </p>
                                <a href={linkInfo.link}>
                                    {linkInfo.link}
                                </a>
                            </li>
                        )})
                    }
                </ul>
            </div>
        </motion.div>
    )
}

export default WorkInfo
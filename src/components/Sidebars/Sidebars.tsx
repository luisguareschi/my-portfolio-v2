"use client"
import styles from "./Sidebars.module.css"
import {motion} from "framer-motion";
import {FiGithub, FiInstagram, FiLinkedin} from "react-icons/fi";
import Link from "next/link";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0,
            delayChildren: 2.25,
        }
    }
}

const item = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: .2}}
}

const Bar = () => {
    return (
        <div className={styles.bar}>
        </div>
    )
}

const Sidebars = () => {
    return (
        <motion.div initial={"hidden"} animate={"show"} variants={container}>
            <motion.div className={styles.rightContainer} variants={item}>
                <motion.div className={styles.email}
                            initial={{rotate: 90, y: -90}}
                            animate={{rotate: 90, y:-90}}
                            whileHover={{y:-10-90}}>
                    <Link href={"mailto:guareschiluis@gmail.com"} className={styles.email}>
                        guareschiluis@gmail.com
                    </Link>
                </motion.div>
                <Bar />
            </motion.div>
            <motion.div className={styles.leftContainer} variants={item}>
                <motion.div whileHover={{y: -10}}>
                    <Link href='https://www.linkedin.com/in/luis-guareschi-29a68b1a0/' target='_blank' className={styles.icon}>
                        <FiLinkedin className={styles.icon}/>
                    </Link>
                </motion.div>
                <motion.div whileHover={{y: -10}}>
                    <Link href={"https://www.instagram.com/luisguareschi/"} target={"_blank"} className={styles.icon}>
                        <FiInstagram className={styles.icon}/>
                    </Link>
                </motion.div>
                <motion.div whileHover={{y: -10}}>
                    <Link href={"https://github.com/luisguareschi"} target={"_blank"} className={styles.icon}>
                        <FiGithub className={styles.icon}/>
                    </Link>
                </motion.div>
                <Bar />
            </motion.div>
        </motion.div>
    )
}

export default Sidebars
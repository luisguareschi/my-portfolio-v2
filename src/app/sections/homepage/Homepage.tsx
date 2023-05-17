"use client"
import styles from "./Homepage.module.css"
import Button from "@/components/Button/Button";
import {motion} from "framer-motion";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 1,
        }
    }
}

const item = {
    hidden: {opacity: 0, y: 50},
    show: {opacity: 1, y: 0, transition: {duration: .2}}
}

const Homepage = () => {
    return (
        <motion.div className={styles.container} initial={"hidden"} animate={"show"} variants={container} id={"homePage"}>
            <motion.div className={styles.helloMsg} variants={item}>
                Hi, my name is
            </motion.div>
            <motion.div className={styles.name} variants={item}>
                Luis Guareschi.
            </motion.div>
            <motion.div className={styles.position} variants={item}>
                I am a Software Developer.
            </motion.div>
            <motion.div className={styles.description} variants={item}>
                I’m a software engineer specializing in building
                (and occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building accessible,
                human-centered products at Upstatement.
            </motion.div>
            <motion.div variants={item}>
                <Button onClick={null} className={styles.button}>
                    Learn more about me
                </Button>
            </motion.div>
        </motion.div>
    )
}

export default Homepage
import styles from  './Footer.module.css'
import useWindowSize from "@/functions/useWindowSize";
import {FiGithub, FiInstagram, FiLinkedin} from "react-icons/fi";
import Link from "next/link";
import {motion} from "framer-motion";

const Footer = () => {
    const windowSize = useWindowSize()
    return (
        <div className={styles.footer}>
            {windowSize.width <= 800 && (
                <div className={styles.icons}>
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
                </div>
            )}
            Designed & Built by Luis Guareschi <br/>
            Next JS & Typescript
        </div>
    )
}

export default Footer
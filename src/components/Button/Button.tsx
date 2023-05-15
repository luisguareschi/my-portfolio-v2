import styles from "./Button.module.css"
import {motion} from "framer-motion";

interface buttonProps {
    onClick:any;
    children: any;
    className?: string
}

const Button = ({children, onClick, className}:buttonProps) => {
    return (
        <div className={[styles.container, className].join(" ")}>
            <motion.button className={styles.button}
                           onClick={onClick}
                           whileHover={{ x: -4, y: -4 }}
            >
                {children}
            </motion.button>
        </div>
    )
}

export default Button
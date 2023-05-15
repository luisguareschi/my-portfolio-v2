"use client"
import styles from "./NavBar.module.css"
import Button from "@/components/Button/Button";
import Image from "next/image";
import logoSrc from "../../../public/logo.svg"
import bgLogoSrc from "../../../public/logoBackground.svg"
import {motion} from "framer-motion";
interface linkButtonProps {
    number: number;
    title: string;
    onClick: any;
}


const navbarContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
};

const navbarItem = {
    hidden: { opacity: 0 , y: -20},
    show: { opacity: 1 , y:0}
};

const downloadCV = () => {

}

const LinkButton = ({number, title, onClick}:linkButtonProps) => {
    return (
        <motion.div variants={navbarItem}>
            <motion.div className={styles.linkButton}
                        onClick={onClick}
                        whileHover={{scale: 1.05}}>
                <div className={styles.linkButtonNumber}>
                    0{number}.
                </div>
                <div className={styles.linkButtonText}>
                    {title}
                </div>
            </motion.div>
        </motion.div>
    )
}


const NavBar = () => {
    const handleLogoClick = () => {
        alert("clicked")
    }
    return (
        <motion.div className={styles.container} variants={navbarContainer} initial={"hidden"} animate={"show"}>
            <motion.div className={styles.logoContainer}
                        onClick={handleLogoClick}
                        variants={navbarItem}
            >
                <Image src={bgLogoSrc} alt={"bg"} width={50} className={styles.logoBg}/>
                <motion.div whileHover={{x: -3, y: -2.5}}>
                    <Image src={logoSrc} alt={"Logo"} width={50} className={styles.logo}/>
                </motion.div>
            </motion.div>
            <div className={styles.rightContainer}>
                <LinkButton number={1} title={"About"} onClick={(event) => alert("clicked")}/>
                <LinkButton number={2} title={"Experience"} onClick={(event) => alert("clicked")}/>
                <LinkButton number={3} title={"Work"} onClick={(event) => alert("clicked")}/>
                <LinkButton number={4} title={"Contact"} onClick={(event) => alert("clicked")}/>
                <motion.div variants={navbarItem}>
                    <Button onClick={(event)=>downloadCV()}>
                        <a download={"LuisGuareschiResume.pdf"} href="LuisGuareschiResume.pdf" className={styles.downloadButton}>
                            Resume
                        </a>
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default NavBar
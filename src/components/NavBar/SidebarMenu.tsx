import styles from "./SidebarMenu.module.css"
import {AnimatePresence, motion} from "framer-motion";
import Button from "@/components/Button/Button";
import {TfiClose} from "react-icons/tfi";
import {LinkButton} from "@/components/NavBar/NavBar";
interface props {
    show: boolean;
    setShowSidebar: any
}

const SidebarMenu = ({show, setShowSidebar}:props) => {
    if (!show) {
        document.body.style.overflowY = "scroll";
    }
    if (show) {
        document.body.style.overflowY = "hidden";
    }

    const handleClose = () => {
        setShowSidebar(false)
    }

    const scroll = (id:string) => {
        document.getElementById(id).scrollIntoView()
        handleClose()
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div className={styles.container}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: .4}}
                            exit={{opacity: 0}}
                            key={"sidebar-container"}
                            onClick={()=>setShowSidebar(false)}>
                    <motion.div className={styles.sidebarContainer}
                                initial={{x: 1000}}
                                animate={{x: 0}}
                                transition={{duration: .4}}
                                exit={{x: 1000}}
                                key={"sidebar"}
                                onClick={(event)=>event.stopPropagation()}>
                        <button className={styles.closeButton} onClick={handleClose}>
                            <TfiClose/>
                        </button>
                        <LinkButton number={1} title={"About"} onClick={(event) => scroll("aboutPage")}/>
                        <LinkButton number={2} title={"Experience"} onClick={(event) => scroll("experiencePage")}/>
                        <LinkButton number={3} title={"Projects"} onClick={(event) => scroll("worksPage")}/>
                        <LinkButton number={4} title={"Contact"} onClick={(event) => scroll("contactPage")}/>
                        <Button>
                            <a download={"LuisGuareschiResume.pdf"} href="LuisGuareschiResume.pdf" className={styles.downloadButton}>
                                Resume
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SidebarMenu

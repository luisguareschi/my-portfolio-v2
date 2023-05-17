"use client"
import styles from "./StickyNavbar.module.css"
import NavBar from "@/components/NavBar/NavBar";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";


const StickyNavbar = () => {
    const [show, setShow] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div className={[styles.container, lastScrollY === 0 ? "" : styles.shadow].join(" ")}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -200}}
                            transition={{duration: .25}}
                            initial={{opacity: 0, y: -200}}>
                    <NavBar showInitialAnimation={lastScrollY === 0}/>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default StickyNavbar
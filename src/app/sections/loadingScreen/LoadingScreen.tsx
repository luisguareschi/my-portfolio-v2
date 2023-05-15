"use client"
import styles from "./LoadingScreen.module.css"
import {motion} from "framer-motion";

const duration1 = 0.8
const delay = duration1 + .5
const duration2 = .2
const totalDelay = duration1 + delay + duration2

const AnimatedLogo = () => {
    return (
        <svg width="421" height="421" viewBox="0 0 421 421" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
            <motion.path d="M39.2016 111.601L210.5 12.7017L381.798 111.601V309.399L210.5 408.298L39.2016 309.399V111.601Z"
                         stroke="#64FFDA"
                         strokeWidth="12"
                         initial={{pathLength: 0}}
                         animate={{pathLength: 1}}
                         transition={{duration: duration1}}
            />
            <motion.path d="M131.297 260V161.818H152.055V242.885H194.146V260H131.297ZM269.173 193.555C268.502 191.222 267.559 189.16 266.345 187.37C265.13 185.549 263.644 184.015 261.886 182.768C260.16 181.49 258.179 180.515 255.941 179.844C253.736 179.173 251.291 178.837 248.607 178.837C243.589 178.837 239.178 180.083 235.375 182.576C231.604 185.069 228.663 188.697 226.554 193.459C224.445 198.189 223.39 203.974 223.39 210.813C223.39 217.653 224.429 223.469 226.506 228.263C228.583 233.058 231.524 236.717 235.327 239.242C239.13 241.735 243.621 242.981 248.798 242.981C253.496 242.981 257.508 242.15 260.831 240.488C264.187 238.794 266.744 236.413 268.502 233.345C270.292 230.277 271.186 226.65 271.186 222.463L275.405 223.086H250.093V207.457H291.178V219.826C291.178 228.455 289.356 235.87 285.712 242.07C282.069 248.239 277.051 253.001 270.659 256.357C264.267 259.68 256.948 261.342 248.702 261.342C239.498 261.342 231.412 259.313 224.445 255.254C217.477 251.163 212.044 245.362 208.145 237.852C204.278 230.309 202.344 221.36 202.344 211.005C202.344 203.047 203.495 195.952 205.796 189.719C208.129 183.455 211.389 178.15 215.576 173.803C219.762 169.457 224.636 166.149 230.197 163.88C235.759 161.61 241.783 160.476 248.271 160.476C253.832 160.476 259.01 161.291 263.804 162.921C268.598 164.519 272.848 166.788 276.556 169.728C280.295 172.669 283.347 176.168 285.712 180.227C288.077 184.254 289.596 188.697 290.267 193.555H269.173Z"
                         fill="#64FFDA"
                         initial={{opacity: 0}}
                         animate={{opacity: 1}}
                         transition={{duration: duration2, delay: delay}}
            />
        </svg>
    )
}

interface LoadingScreenProps {
    setLoading: any
}

const LoadingScreen = ({setLoading}:LoadingScreenProps) => {
    return (
        <div className={styles.container}>
            <motion.div className={styles.logoContainer}
                        initial={{scale: 1, opacity: 1}}
                        animate={{scale: 0, opacity: 0}}
                        transition={{delay: totalDelay}}
                        onAnimationComplete={()=>setLoading(false)}
            >
                <AnimatedLogo/>
            </motion.div>
        </div>
    )
}

export default LoadingScreen
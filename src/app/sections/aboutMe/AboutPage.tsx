import styles from "./AboutPage.module.css"
import TitleSeparator from "@/components/TitleSeparator/TitleSeparator";
import Image from "next/image";
import {motion} from "framer-motion";
import {FadeInWhenVisible} from "@/functions/Animations";

const ProfilePicture = () => {
    return (
        <motion.div className={styles.profileContainer} whileHover={{x: 10, y:10}}>
            <motion.div whileHover={{x: -15, y:-15}} style={{background: "transparent"}}
                        className={styles.imgOuterContainer}>
                <Image src={"/profilePicture.jpg"} alt={"profile"} width={493} height={393} className={styles.img}/>
            </motion.div>
        </motion.div>
    )
}

const AboutPage = () => {
    return (
        <FadeInWhenVisible>
            <div className={styles.container} id={"aboutPage"}>
                <TitleSeparator  number={"01"} title={"About Me"}/>
                <div className={styles.infoContainer}>
                    <p>
                        As a <span className={styles.highlight}>Mechanical Engineer</span> with
                        a <span className={styles.highlight}> strong passion for software development</span>,
                        I bring a unique blend of technical expertise and innovative problem-solving to
                        my role as a software developer. With a background
                        in <span className={styles.highlight}>React Js & React Native</span>,
                         I thrive in dynamic environments where I can apply my skills to drive impactful results.
                        Having developed apps for both the
                        <span className={styles.highlight}>App Store and Google Play Store</span>,
                        I have a proven track record of delivering engaging user experiences.
                        <br/><br/>
                        My experience with leading companies like <span className={styles.highlight}>Airbus and John Deere</span> has
                        further refined my abilities in optimizing processes and leveraging technologies
                        such as <span className={styles.highlight}>machine learning</span>,
                        utilizing <span className={styles.highlight}>React Js & Python</span>.
                        As a collaborative team player with
                        excellent communication skills, I am always eager to expand my knowledge and stay updated
                        on emerging technologies.
                        <br/><br/>
                        If you are seeking a dedicated software developer who can deliver
                        high-quality solutions, I would be thrilled to get in contact and explore potential opportunities.
                        I firmly believe that seeking challenges
                        is the best way to continually grow and improve as a professional.
                    </p>
                    <ProfilePicture />
                </div>
            </div>
        </FadeInWhenVisible>
    )
}

export default AboutPage
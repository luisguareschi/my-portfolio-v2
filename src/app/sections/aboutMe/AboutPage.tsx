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
                <Image src={"/profile.JPG"} alt={"profile"} width={493} height={393} className={styles.img}/>
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
                        As a software developer with a strong background in <span className={styles.highlight}>React Js </span>
                        & <span className={styles.highlight}>React Native</span>, and a
                        passion for creating innovative solutions, I thrive in dynamic environments where
                        I can apply my technical expertise to drive impactful results. With experience
                        in <span className={styles.highlight}>developing apps for both the App Store and Google Play Store</span>,
                        I have demonstrated my ability to deliver engaging user experiences. <br/><br/>

                        Additionally, my involvement in projects with leading companies like
                        <span className={styles.highlight}> Airbus and John Deere </span>
                        has honed my skills in optimizing processes and leveraging technologies
                        like <span className={styles.highlight}>machine learning React Js & Python</span>.
                        I am a collaborative team player with
                        excellent communication skills, and I am always eager to expand my knowledge
                        and stay updated on emerging technologies. If you are looking for a dedicated
                        software developer who can deliver high-quality solutions, I would be thrilled
                        to connect and explore potential opportunities. <br/><br/>

                        I may still have much to learn, but I think that looking
                        for ways to challenge ourselves is the best way to improve as a profesional.
                    </p>
                    <ProfilePicture />
                </div>
            </div>
        </FadeInWhenVisible>
    )
}

export default AboutPage
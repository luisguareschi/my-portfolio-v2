import styles from "./ContactPage.module.css"
import TitleSeparator from "@/components/TitleSeparator/TitleSeparator";
import Button from "@/components/Button/Button";
import Footer from "@/components/footer/Footer";

const ContactPage = () => {
    return (
        <div className={styles.container} id={"contactPage"}>
            <div className={styles.title}>
                {"04.What's Next?"}
            </div>
            <div className={styles.subtitle}>
                Get In Touch
            </div>
            <div className={styles.content}>
                Im currently looking for job opportunities, so if you are interested in my profile my inbox is always open.
                {" I'll try to get back to you as fast as I can!"}
            </div>
            <Button>
                <a href={"mailto:guareschiluis@gmail.com"} className={styles.button}>
                    Contact Me
                </a>
            </Button>
            <Footer />
        </div>
    )
}

export default ContactPage
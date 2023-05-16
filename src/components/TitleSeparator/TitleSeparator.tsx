import styles from "./TitleSeparator.module.css"

interface props {
    number: string;
    title: string;
}

const TitleSeparator = ({number, title}:props) => {
    return (
        <div className={styles.container}>
            <div className={styles.number}>{number}.</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.separator}>

            </div>
        </div>
    )
}

export default TitleSeparator
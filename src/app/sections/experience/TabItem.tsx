import styles from "./TabItem.module.css"

interface props {
    title: string;
    selected: boolean;
    value: number;
}

const TabItem = ({title, value, selectedTab, setSelectedTab}) => {
    return (
        <div className={[styles.container, value === selectedTab ? styles.selected : ""].join(" ")}
             onClick={()=>setSelectedTab(value)}>
            {title}
        </div>
    )
}

export default TabItem
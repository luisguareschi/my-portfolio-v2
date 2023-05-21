import styles from './ExperiencePage.module.css'
import TitleSeparator from "@/components/TitleSeparator/TitleSeparator";
import TabItem from "@/app/sections/experience/TabItem";
import {useState} from "react";
import WorkInfo from "@/app/sections/experience/WorkInfo";
import {AnimatePresence} from "framer-motion";
import {FadeInWhenVisible} from "@/functions/Animations";

type month = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sept" | "Oct" | "Nov" | "Dec";
type date = [month, number] | ["Present"];
interface tabItem {
    value: number;
    startDate: date;
    endDate: date;
    description: string[] | string
    company: string;
    jobTitle: string;
    links?: {name: string, link: string}[]
}

const tabItems:tabItem[] = [
    {
        company: "Trident",
        startDate: ["Nov", 2022],
        endDate: ["Present"],
        description: [
            "Created an app by myself for the Appstore and Google Playstore. " +
            "The app consists of a party game to play with you friends. It was developed in react native using expo.",
        ],
        value: 0,
        jobTitle: "React Native Developer",
        links: [
            {name:"App Store link", link: "https://apps.apple.com/app/trident-party-game/id6445924483"},
            {name:"Google Play Store link", link: "https://play.google.com/store/apps/details?id=com.luisguareschi.trident"},
        ]
    },
    {
        company: "Airbus & UC3M",
        startDate: ["May", 2021],
        endDate: ["Jul", 2023],
        description: [
            "I was part of the investigation group between my university and AIRBUS in charge " +
            "of developing a new software to optimize the assembly times of the airplane's " +
            "manufacturing. As of now the application has been finished and its being used in the Airbus factories",
            "I was the lead programmer in charge of developing the PC application to fulfill " +
            "this goal, the app was coded in React Js with Python (Flask) for the backend"
        ],
        value: 1,
        jobTitle: "Full Stack Developer"
    },
    {
        company: "John Deere",
        startDate: ["Sept", 2021],
        endDate: ["Feb", 2023],
        description: [
            "Main developer in charge of a team for developing an application using machine learning " +
            "with python in order to automate the process of creating and updating " +
            "orders received from customers to SAP",
            "Coordinating customer's orders",
            "Stock and production control",
            "Creating production reports",
            "Also developed a webpage in React Js that automatically calculates the future planning of " +
            "stock production to be able to determine if the factory has the necessary " +
            "man power to fulfill the production requirements"
        ],
        value: 2,
        jobTitle: "Software Developer Intern"
    },
    {
        company: "Ubii Pagos",
        startDate: ["Jun", 2020],
        endDate: ["Aug", 2020],
        description: [
            "The Ubii company is a company created in Venezuela that was the one that implemented " +
            "delivery services and also a product store online (service similar to amazon)",
            "I was in the programming team of the back-end of the website of Ubii market and also the operation of " +
            "the Ubii GO app in the which I did numerous programs and jobs in Python and " +
            "SQL for the management of the company's databases"
        ],
        value: 3,
        jobTitle: "Software Developer Intern"
    }
]

const ExperiencePage = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0)
    return (
        <FadeInWhenVisible>
            <div className={styles.container} id={"experiencePage"}>
                <TitleSeparator  number={"02"} title={"Where I've Worked"}/>
                <div className={styles.bodyContainer}>
                    <div className={styles.leftContainer}>
                        {tabItems.map((item, index) => {
                            return (
                                <TabItem title={item.company} value={item.value}
                                         setSelectedTab={(val)=> setSelectedTab(val)}
                                         selectedTab={selectedTab} key={item.value}/>
                            )})}
                    </div>
                    <AnimatePresence>
                        {tabItems.map((item, index) => {
                            return (
                                <WorkInfo item={item} selectedTab={selectedTab} key={item.value}/>
                            )})}
                    </AnimatePresence>
                </div>
            </div>
        </FadeInWhenVisible>
    )
}

export default ExperiencePage
export type {tabItem}
"use client"
import styles from './page.module.css'
import NavBar from "@/components/NavBar/NavBar";
import Homepage from "@/app/sections/homepage/Homepage";
import Sidebars from "@/components/Sidebars/Sidebars";
import {useEffect, useRef, useState} from "react";
import LoadingScreen from "@/app/sections/loadingScreen/LoadingScreen";
import AboutPage from "@/app/sections/aboutMe/AboutPage";
import Button from "@/components/Button/Button";
import StickyNavbar from "@/components/NavBar/StickyNavbar";
import ExperiencePage from "@/app/sections/experience/ExperiencePage";
import ProjectsPage from "@/app/sections/projects/ProjectsPage";
import ContactPage from "@/app/sections/contact/ContactPage";
import {FadeInWhenVisible} from "@/functions/Animations";

export default function Home() {
    const [loading, setLoading] = useState(true)

    if (loading) {
        return (
            <LoadingScreen setLoading={(val: any)=>setLoading(val)}/>
        )
    }
    return (
      <>
          <StickyNavbar />
          <Sidebars />
          <div className={styles.bodyContainer}>
              <Homepage />
              <AboutPage />
              <ExperiencePage />
              <ProjectsPage />
              <ContactPage />
          </div>
      </>
    )
}

"use client"
import styles from './page.module.css'
import NavBar from "@/components/NavBar/NavBar";
import Homepage from "@/app/sections/homepage/Homepage";
import Sidebars from "@/components/Sidebars/Sidebars";
import {useEffect, useState} from "react";
import LoadingScreen from "@/app/sections/loadingScreen/LoadingScreen";

export default function Home() {
    const [loading, setLoading] = useState(true)
    if (loading) {
        return (
            <LoadingScreen setLoading={(val)=>setLoading(val)}/>
        )
    }
    return (
      <>
          <NavBar />
          <Sidebars />
          <div className={styles.bodyContainer}>
              <Homepage />
          </div>
      </>
    )
}

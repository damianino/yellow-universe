"use client"

import styles from "./page.module.css";
import Timeline from "@/components/Timeline";
import StayInTouch from "@/components/StayInTouch";
import Artifacts from "@/components/Artifacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import YellowUniverse from "@/components/YellowUniverse";
import WhoIsA from "@/components/WhoISA";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 6000)
    }, [])

    return (
        <main className={styles.main}>
            { isLoading? <Loader/> : null}
            <Header/>
            <YellowUniverse/>
            <WhoIsA/>
            <Timeline/>
            <StayInTouch/>
            <Artifacts/>
            <Footer/>
        </main>
    );
}
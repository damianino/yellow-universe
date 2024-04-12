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
import { useOnLoadImages } from "@/hooks/useOnLoadImages";

export default function Home() {
    const loaded = useOnLoadImages()

    useEffect(() => {
        if (!loaded) return
        document.getElementById("loader")?.classList.add("display-none")
    }, [loaded])

    return (
        <main className={styles.main}>
            <Loader />
            <Header/>
            <YellowUniverse/>
            <WhoIsA/>
            <Timeline/>
            <StayInTouch/>
            {/* <Artifacts/> */}
            <Footer/>
        </main>
    );
}
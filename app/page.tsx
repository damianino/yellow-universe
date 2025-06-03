"use client";

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

import { Cart } from "@/components/Cart";
import VimeoPlayer from "@/components/Video";
import ArtifactCard from "@/components/Artifact";
import Timer from "@/components/Timer";

const modalStyle = {
  content: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    paddingTop: "50px",
    transition: "1s",
    overflow: "scroll",
    zIndex: 1111,
  },
  overlay: {
    backgroundColor: "#000000dc",
    zIndex: 1111,
  },
};

export default function Home() {
  const loaded = useOnLoadImages();

  useEffect(() => {
    if (!loaded) return;
    document.getElementById("loader")?.classList.add("display-none");
  }, [loaded]);

  return (
    <main className={styles.main}>
      <Loader />
      <VimeoPlayer />
      {/* <Timer /> */}
      <ArtifactCard />
      <Header />
      <YellowUniverse />
      <WhoIsA />
      <Timeline />
      <StayInTouch />
      {/* <Artifacts /> */}
      <Footer />
      <Cart />
    </main>
  );
}

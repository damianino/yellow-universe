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
import { Analytics } from "@vercel/analytics/next";
import { Cart } from "@/components/Cart";
import VimeoPlayer from "@/components/Video";
import ArtifactCard from "@/components/Artifact";
import Timer from "@/components/Timer";
import { TimerButton, TimerContainer } from "@/components/Video/styles";
import { InfoModal } from "@/components/InfoModal";
import { useCart, useModalBoxStore, useModalStore } from "./store/cartStore";

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
  const [showLoader, setShowLoader] = useState(true);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isFilm, setIsFilm] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("isFilm") === "true"
      : false
  );

  const isOpen = useModalBoxStore((state) => state.isInfoModalOpen);
  const addToCart = useCart((state) => state.addToCart);
  const openCartModal = useModalStore((state) => state.openModal);

  useEffect(() => {
    if (loaded) {
      setShowLoader(false);
    }
  }, [loaded]);

  useEffect(() => {
    const value = localStorage.getItem("isFilm");
    if (value === "true") {
      setIsFilm(true);
    }
  }, [isFilm]);

  return (
    <main className={styles.main}>
      {showLoader && <Loader />}
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        onBuy={() => {
          setIsInfoModalOpen(false);
          addToCart();
          openCartModal();
        }}
      />
      <VimeoPlayer />
      <ArtifactCard onOpenModal={() => setIsInfoModalOpen(true)} />
      <Header />
      <YellowUniverse />
      <WhoIsA />
      <Timeline />
      <StayInTouch />
      <Footer />
      <Cart />
      <Analytics />
    </main>
  );
}

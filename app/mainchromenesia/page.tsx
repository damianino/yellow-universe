"use client";

import styles from "../page.module.css";
import Timeline from "@/components/Timeline";
import StayInTouch from "@/components/StayInTouch";
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
import { InfoModal } from "@/components/InfoModal";
import { useCart, useModalStore } from "../store/cartStore";

export default function Home() {
  const loaded = useOnLoadImages();
  const [showLoader, setShowLoader] = useState(true);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isFilm, setIsFilm] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("isFilm") === "true"
      : false
  );

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
    </main>
  );
}

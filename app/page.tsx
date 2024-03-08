import styles from "./page.module.css";
import Timeline from "@/components/Timeline";
import StayInTouch from "@/components/StayInTouch";
import Artifacts from "@/components/Artifacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import YellowUniverse from "@/components/YellowUniverse";
import WhoIsA from "@/components/WhoISA";

export default function Home() {
    return (
        <main className={styles.main}>
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

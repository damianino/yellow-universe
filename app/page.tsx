import styles from "./page.module.css";
import Timeline from "@/components/Timeline";

export default function Home() {
    return (
        <main className={styles.main}>
            <div style={{
                width:"2px",
                height:"100vh",
                position: "absolute",
                margin: "0 auto",
                backgroundColor: "skyblue",
                zIndex: 1111
            }}></div>
           <Timeline/>
        </main>
    );
}

import styles from "./page.module.scss";

import { MiniPlayer, RadioStationList } from "@/components";
import { AudioProvider } from "@/contexts";

export default function Home() {
  return (
    <main className={styles.main}>
      <AudioProvider>
        <RadioStationList />
        <MiniPlayer />
      </AudioProvider>
    </main>
  );
}

import styles from "./page.module.scss";

import { RadioStationList } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <RadioStationList />
    </main>
  );
}

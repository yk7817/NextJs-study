import styles from "./Main.module.css";
import Links from "@/src/components/LInks";
import Headline from "@/src/components/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <li>Save and see your changes instantly.</li>
      </Headline>
      <Links />
    </main>
  );
}

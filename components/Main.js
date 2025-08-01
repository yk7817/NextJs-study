import styles from "@/components/Main.module.css";
import Links from "@/components/Links";
import Headline from "@/components/Headline";

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

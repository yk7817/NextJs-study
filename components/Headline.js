import Image from "next/image";
import styles from "@/components/Headline.module.css";

export default function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol>
        <li>
          Get started by editing <code>pages/{props.page}.js</code>.
        </li>
        {props.children}
      </ol>
    </div>
  );
}

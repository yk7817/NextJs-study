import Image from "next/image";
import styles from "./Links.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation",
    description: "Find in-depth infomation about Next.js features and API",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn",
    description: "Learn about Next.js in an interractive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples",
    description: "Discover and deploy boilerplate example Next.js project",
  },
  {
    href: "https://vercel.com/",
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel",
  },
];

export default function Home() {
  return (
    <div className={styles.ctas}>
      <a
        className={styles.primary}
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Deploy now
      </a>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.secondary}
      >
        Read our docs
      </a>
      {/* {ITEMS.map((item) => (
        <div>
          <a href={item.href} target="_blank">
            {item.title}
          </a>
          <p>{item.description}</p>
        </div>
      ))} */}
    </div>
  );
}

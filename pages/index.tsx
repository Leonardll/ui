import Hero from "@/components/hero";
import About from "@/components/about";
import Contact from "@/components/contact";
import { useRef, useState, useEffect, RefObject } from "react";
import Layout from "../components/layout";
import Services from "@/components/myServices/services";
import Stack from "@/components/myStack";
import { GetStaticProps } from "next"; // Import GetStaticProps
import { clientPromise } from "@/lib/mongodb"; // Import clientPromise

// Define interfaces for data
interface StackItem {
  _id?: string;
  id?: string;
  name: string;
  url: string | null;
  description: string;
  category: string;
}

interface PortfolioItem {
  _id?: string;
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  github: string;
}

interface HomeProps {
  data: StackItem[];
  data2: PortfolioItem[];
  isError?: boolean;
}

export default function Home({ data, data2, isError }: HomeProps) { // Accept data as props
  const [position, setPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [prevActiveSection, setPrevActiveSection] = useState("");
  const mainRef = useRef<HTMLDivElement>(null);
  const refs = {
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    stack: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY + window.innerHeight / 2);
      for (let section in refs as { [key: string]: RefObject<HTMLElement> }) {
        if (
          refs[section].current &&
          refs[section].current.offsetTop <= position &&
          refs[section].current.offsetTop + refs[section].current.clientHeight > position
        ) {
          section !== activeSection && setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, position]);

  useEffect(() => {
    if (activeSection && activeSection !== prevActiveSection) {
      const targetElement = refs[activeSection].current;
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${activeSection}`);
    }
    setPrevActiveSection(activeSection);
  }, [activeSection]);

  if (!data || !data2) return null; // Or a loading spinner if preferred

  return (
    <Layout ref={mainRef} active={activeSection}>
      <Hero />
      <About ref={refs.about} />
      <Services ref={refs.services} />
      <Stack ref={refs.stack} data={data} isError={isError} /> {/* Pass data directly */}
      <Contact ref={refs.contact} />
    </Layout>
  );
}

// Add getStaticProps to fetch data at build time
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const data: StackItem[] = await db.collection<StackItem>("test").find({}).limit(30).toArray();
    const data2: PortfolioItem[] = await db.collection<PortfolioItem>("portfolio").find({}).limit(30).toArray();

    return {
      props: {
        data: JSON.parse(JSON.stringify(data)), // Serialize data
        data2: JSON.parse(JSON.stringify(data2)), // Serialize data
        isError: false,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (e: any) {
    console.error("Error fetching data in getStaticProps:", e);
    return {
      props: {
        data: [],
        data2: [],
        isError: true,
      },
    };
  }
};


import Hero from "@/components/hero";
import StackSection from "../components/stackSection";
import About from "../components/about2";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import myImageLoader from "../loader";
import useSWR from "swr";
import { useRef, useState, useEffect, RefObject } from "react";
import Layout from "../components/layout";
import Services from "@/components/myServices/services";
import Stack from "@/components/myStack";
const fetcher = async (url: string) => fetch(url).then((res) => res.json());
export default function Home() {
    const { data, error } = useSWR<{ data: any; data2: any }>("/api/hello", fetcher);
    const [position, setPosition] = useState(0)
    const [activeSection, setActiveSection] = useState("")
    const [prevActiveSection, setPrevActiveSection] = useState("")
    const refs = {
        home: useRef(null),
        about: useRef(null),
        services: useRef(null),
        stack: useRef(null),
        portfolio: useRef(null),
        contact: useRef(null),
    }
    
    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.scrollY + window.innerHeight / 2)
            for (let section in refs as {[key: string]: RefObject<HTMLDivElement>}) {
                if (
                    refs[section].current &&
                    refs[section].current.offsetTop <= position && refs[section].current.offsetTop + refs[section].current.clientHeight > position
                ) {
                    section !== activeSection && setActiveSection(section)
                }
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [activeSection, position])

    useEffect(() => {
        if (activeSection && activeSection !== prevActiveSection) {
            const targetElement = refs[activeSection].current;
            targetElement.scrollIntoView({ behavior: "smooth" })
            window.history.pushState(null, null, `#${activeSection}`)
        }
        setPrevActiveSection(activeSection)
    }, [activeSection])

    if (error) return <div>Failed to load</div>
    if (!data) return null

    return (
        <Layout ref={refs.home} active={activeSection}>
            <Hero />
            {/* <About ref={refs.about} /> */}
            <About ref={refs.about} />
            <Services ref={refs.services} />
            <Stack ref={refs.stack} data={data.data} />
            {/* <StackSection ref={refs.stack} data={data.data} loader={myImageLoader} /> */}
            {/* <Portfolio ref={refs.portfolio} loader={myImageLoader} data={data.data2} /> */}
            <Contact ref={refs.contact} />
        </Layout>
    )
}


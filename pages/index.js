import StackSection from "../components/stackSection"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import myImageLoader from "../loader"
import useSWR from "swr"
import { useRef, useState, useEffect } from "react"
import Layout from "../components/layout"

const fetcher = async (url) => fetch(url).then((res) => res.json())
export default function Home() {
    const { data, error } = useSWR("/api/hello", fetcher)
    console.log(data)

    const [position, setPosition] = useState(0)
    const [activeSection, setActiveSection] = useState("")
    const [prevActiveSection, setPrevActiveSection] = useState("")
    const refs = {
        home: useRef(null),
        stack: useRef(null),
        about: useRef(null),
        portfolio: useRef(null),
        contact: useRef(null),
    }
    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.scrollY + 100)
            for (let section in refs) {
                if (
                    refs[section].current &&
                    refs[section].current.offsetTop <= position &&
                    refs[section].current.offsetTop + refs[section].current.clientHeight > position
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
            const targetElement = refs[activeSection].current
            targetElement.scrollIntoView({ behavior: "smooth" })
            window.history.pushState(null, null, `#${activeSection}`)
        }
        setPrevActiveSection(activeSection)
    }, [activeSection])

    if (error) return <div>Loading...</div>
    if (!data) return null

    return (
        <Layout ref={refs.home} active={activeSection}>
            <StackSection ref={refs.stack} data={data.data} loader={myImageLoader} />
            <About ref={refs.about} />
            <Portfolio ref={refs.portfolio} loader={myImageLoader} data={data.data2} />
            <Contact ref={refs.contact} />
        </Layout>
    )
}

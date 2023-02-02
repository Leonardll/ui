import { forwardRef } from "react"
import SectionHeader from "../sectionHeader"

const aboutData = [
    "My name is Leo, and I am a multilingual Full Stack Developer with a background in Music Rights & Royalties Management. As a lifelong learner, I am deeply passionate about discovering new technologies and industry best practices. My aspiration is to design advanced web applications that provide users with a seamless and engaging experience.",
]

function TextContainer() {
    return (
        <div className="container grid grid-flow-row md:grid-cols-1 ">
            <div className=" justify-center items-center mx-auto w-full md:max-w-[60%]  p-5">
                <p className=" text-white brake-words text-justify text-xl mx-auto max-w-auto tracking-tighter py-3">
                    {aboutData[0]}
                </p>
            </div>
        </div>
    )
}
const About = forwardRef((props, ref) => {
    return (
        <section
            ref={ref}
            id="about"
            className="grid grid-cols-1 w-full place-items-center bg-[#1abc9c] p-5 scroll-mt-20"
        >
            <div className="container p-5">
                <SectionHeader
                    title={"About"}
                    titleColor={"text-white"}
                    bgColor={"bg-white"}
                    borderColor={"border-[#2c3e50]"}
                    textColor={"text-white"}
                />
                <TextContainer />
            </div>
        </section>
    )
})

export default About

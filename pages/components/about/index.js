import SectionHeader from "../sectionHeader"

const aboutData = [
    "Hi, i am Leo, a multi-lingual, Full Stack Developer with a background in Music Rights & Royalties Managment. Forever student, who feel in love with learning about new technologies and industry's best practices. Aspiring to build advanced web applications that will impact the world in a positive way.",
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
function About() {
    return (
        <section
            id="about"
            className="grid grid-cols-1 w-full place-items-center bg-[#1abc9c] p-5"
        >
            <div className="container">
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
}

export default About

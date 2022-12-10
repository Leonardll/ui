import Divider from "../divider"

function SectionHeader() {
    return (
        <>
            <div className="text-center text-white text-5xl mt-3">
                <h1>About</h1>
            </div>
            <Divider
                bgColor={"bg-white"}
                borderColor={"border-[#2c3e50]"}
                textColor={"text-white"}
            />
        </>
    )
}

const aboutData = [
    "Hi, i am Leo, a multi-lingual, Full Stack Developer with a background in Music Rights & Royalties Managment. Forever student, who feel in love with learning about new technologies and industry's best practices. Aspiring to build advanced web applications that will impact the world in a positive way.",
]

function TextContainer() {
    return (
        <div className="container grid grid-flow-row md:grid-cols-1  ">
            <div className=" justify-center items-center mx-auto max-w-[70%]">
                <p className=" text-white brake-words text-justify text-lg mx-auto max-w-auto tracking-tighter p-5">
                    {aboutData[0]}
                </p>
                <p className=" text-white brake-words text-justify text-lg mx-auto max-w-auto tracking-tighter p-5"></p>
            </div>
        </div>
    )
}
function About() {
    return (
        <section
            id="about"
            className="grid grid-cols-1 w-full h-1/2 place-items-center bg-[#1abc9c] p-5"
        >
            <div className="container">
                <SectionHeader />
                <TextContainer />
            </div>
        </section>
    )
}

export default About

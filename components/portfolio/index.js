import SectionHeader from "../sectionHeader"
import Image from "next/image"
import { useState, forwardRef } from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
import { FaLink, FaGithub } from "react-icons/fa"
import Link from "next/link"

const iconsData = [
    {
        id: 1,
        icon: <FaLink />,
    },
    {
        id: 2,
        icon: <FaGithub />,
    },
]

function CardGradient({ children }) {
    return (
        <div
            className={`bg-gradient-to-r rounded-2xl max-w-[500px] md:max-w-[400px]   from-[#1abc9c]  to-[#2c3e50] mx-auto p-2`}
        >
            {children}
        </div>
    )
}

function IconGradient({ children }) {
    return (
        <div className="bg-gradient-to-r rounded-full from-[#1abc9c] m-5 to-[#2c3e50]   p-1">
            <div className="flex h-full p-2 bg-black rounded-3xl">{children}</div>
        </div>
    )
}

function CardImage({ imgSrc }) {
    return (
        <div
            className="w-full h-full rounded-t-lg"
            style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "300px",
            }}
        ></div>
    )
}

function CardBody({ title, description, isClamped, setIsClamped }) {
    return (
        <>
            <h2 className="p-3 text-xl text-center">{title}</h2>
            <div className="p-5">
                <p
                    className={
                        isClamped
                            ? "text-justify text-lg w-full line-clamp-5 my-5"
                            : "text-justify text-lg w-full line-clamp-none"
                    }
                >
                    {description}
                </p>

                <button
                    onClick={() => {
                        setIsClamped(!isClamped)
                    }}
                    className="rounded p-3 font-semi-bold m-2 bg-[#1abc9c] text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-[#1abc9c] hover:bg-white "
                >
                    Read More
                </button>
            </div>
        </>
    )
}
function CardFooter({ id, link, github }) {
    return (
        <div className="flex justify-center items-center">
            {iconsData.map((item, index) => (
                <Link
                    className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  hover:bg-opacity-30"
                    key={index}
                    href={item.id !== 2 ? link : github}
                >
                    <IconGradient children={item.icon} />
                </Link>
            ))}
        </div>
    )
}
function CardItem({ imgSrc, title, description, id, link, github, isClamped, setIsClamped }) {
    return (
        <CardGradient>
            <div className="flex flex-col auto-rows-min text-white	 bg-[#1a252f] justify-center items-center w-full rounded-xl">
                <CardImage imgSrc={imgSrc} />

                <CardBody
                    title={title}
                    description={description}
                    isClamped={isClamped}
                    setIsClamped={setIsClamped}
                />
                <CardFooter id={id} link={link} github={github} />
            </div>
        </CardGradient>
    )
}

function PreviousButton({ clickHandler }) {
    return (
        <GrPrevious
            onClick={() => {
                clickHandler()
            }}
            style={{
                backgroundColor: "white",
                opacity: 0.5,
                borderRadius: "50%",
                margin: "0 auto",
                padding: "0.5em",
                fontSize: "1em",
            }}
            type="button"
            className=" active h-[3em] w-[3em] z-[2] translate-y-[10vh]  absolute carousel-control-prev left-[calc(1vw+.5em)] top-[calc(30vh+1.5em)] md:top-[50%] flex items-center justify-center"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            cursor={"pointer"}
        >
            Previous
        </GrPrevious>
    )
}

function NextButton({ clickHandler }) {
    return (
        <GrNext
            style={{
                backgroundColor: "white",
                opacity: 0.5,
                borderRadius: "50%",
                margin: "0 auto",
                padding: "0.5em",
                fontSize: "1em",
            }}
            onClick={() => {
                clickHandler()
            }}
            type="button"
            className=" active h-[3em] w-[3em] carousel-control-next opacity-[0.5]  absolute  z-[2] translate-y-[10vh] flex items-center justify-center right-[calc(1vw+.5em)] top-[calc(30vh+1.5em)] md:top-[50%] "
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            cursor={"pointer"}
        >
            Next
        </GrNext>
    )
}

function Slide({ cardData, currentCardIndex, isClamped, setIsClamped }) {
    return (
        <ul className="m-0 p-0 list-none">
            {cardData.map((item, index) => {
                return currentCardIndex === index ? (
                    <li
                        key={item._id}
                        className="inset-0 transition-opacity duration-1000 ease-in-out"
                    >
                        <CardItem
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                            github={item.github}
                            id={item.title}
                            isClamped={isClamped}
                            setIsClamped={setIsClamped}
                        />
                    </li>
                ) : null
            })}
        </ul>
    )
}

function Carousel({
    cardData,
    currentCardIndex,
    prevSlideHandler,
    nextSlideHandler,
    isClamped,
    setIsClamped,
}) {
    return (
        <div className="container carousel w-full  my-10 mx-auto">
            <PreviousButton
                clickHandler={prevSlideHandler}
                isClamped={isClamped}
                setIsClamped={setIsClamped}
            />
            {/* track container*/}
            <Slide
                cardData={cardData}
                currentCardIndex={currentCardIndex}
                isClamped={isClamped}
                setIsClamped={setIsClamped}
            />
            {/* </div> */}
            <NextButton
                clickHandler={nextSlideHandler}
                isClamped={isClamped}
                setIsClamped={setIsClamped}
            />
        </div>
    )
}

const Portfolio = forwardRef((props, ref) => {
    const { data } = props
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [isClamped, setIsClamped] = useState(true)
    const prevSlideHandler = () => {
        if (currentCardIndex !== 0) {
            setIsClamped(true)
            setCurrentCardIndex(currentCardIndex - 1)
        } else if (currentCardIndex === 0) {
            setIsClamped(true)
            setCurrentCardIndex(data.length - 1)
        }
    }
    const nextSlideHandler = () => {
        console.log("clicked")

        if (currentCardIndex !== data.length - 1) {
            setIsClamped(true)
            setCurrentCardIndex(currentCardIndex + 1)
        } else if (currentCardIndex === data.length - 1) {
            setIsClamped(true)
            setCurrentCardIndex(0)
        }
    }

    return (
        <section ref={ref} id="portfolio" className="w-full scroll-mt-20 bg-white p-5">
            <div className="container relative w-full mx-auto">
                <div className="container my-4 mx-auto">
                    <SectionHeader
                        title="Portfolio"
                        titleColor="text-[#2c3e50]"
                        bgColor="bg-[#2c3e50]"
                        borderColor="border-blue-500"
                        textColor="text-[#2c3e50]"
                    />
                </div>

                {/* carousel container */}
                <Carousel
                    isClamped={isClamped}
                    setIsClamped={setIsClamped}
                    cardData={data}
                    currentCardIndex={currentCardIndex}
                    prevSlideHandler={prevSlideHandler}
                    nextSlideHandler={nextSlideHandler}
                />
            </div>
        </section>
    )
})

export default Portfolio

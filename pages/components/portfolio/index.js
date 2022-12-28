import SectionHeader from "../sectionHeader"
import Image from "next/image"
import { useEffect, useState } from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
const cardData = [
    {
        imgSrc: "https://my-landing-page-52061.web.app/assets/img/pexels-photo-bg.jpeg",
        title: "Crypto Tracker",
        description:
            "My React Crypto Tracker Introducing my first server side rendering app (SSR) designed with Next.js and deployed on Firebase. First time are always a chalange but today i am proud to display it on my portfolio. The data are fetch from CoinGecko rest API, it was designed using functional component rather than class, useState and useEffect hooks.",
        link: "https://myreactcryptotracker.web.app/",
    },
    {
        imgSrc: "/1670757504364.jpg",
        title: "Hack Money",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga iste, beatae consectetur tempora officiis commodi repudiandae. Ipsam minima reprehenderit, iusto ut voluptatem temporibus porro autem perspiciatis aliquid ex repudiandae.",
        link: "https://my-landing-page-52061.web.app/",
    },
]
function CardItem({ imgSrc, title, description }) {
    return (
        <div className="bg-gradient-to-r rounded-2xl w-full md:max-w-[400px]   from-[#2c3e50] to-[#1abc9c] mx-auto p-2">
            <div className="flex flex-col bg-white justify-center items-center w-full rounded-xl">
                <Image
                    src={imgSrc}
                    width={200}
                    height={150}
                    responvive="true"
                    alt={title}
                    className="rounded-full m-5 h-full w-auto p-3"
                />

                <div className="flex flex-row justify-center">
                    <h3 className="p-3">{title}</h3>
                </div>
                <div className="flex flex-row w-full">
                    <p className="text-justify p-5">{description}</p>
                </div>

                <div className="bg-gradient-to-r rounded-full from-[#1abc9c] m-3 to-[#2c3e50] mx-auto  p-1">
                    <div className="flex h-full p-2 bg-white rounded-3xl">Link</div>
                </div>
            </div>
        </div>
    )
}

function PreviousButton({ clickHandler }) {
    return (
        <GrPrevious
            onClick={() => {
                clickHandler()
            }}
            type="button"
            className=" active h-[3em] w-[3em] z-[2] translate-y-[10vh] opacity-[0.5] absolute  carousel-control-prev left-[1em] top-[50%] flex items-center justify-center"
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
            onClick={() => {
                clickHandler()
            }}
            type="button"
            className=" active h-[3em] w-[3em] carousel-control-next opacity-[0.5]  absolute  z-[2] translate-y-[10vh] flex items-center justify-center right-[1em] top-[50%]"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            cursor={"pointer"}
        >
            Next
        </GrNext>
    )
}

function Slide({ cardData, currentCardIndex }) {
    return (
        <ul className="m-0 p-0 list-none">
            {cardData.map((item, index) => {
                return currentCardIndex === index ? (
                    <li
                        key={item.title}
                        className="inset-0 transition-opacity duration-1000 ease-in-out"
                    >
                        <CardItem
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                            link={"https://myreactcryptotracker.web.app/"}
                        />
                    </li>
                ) : null
            })}
        </ul>
    )
}

function Carousel({ cardData, currentCardIndex, prevSlideHandler, nextSlideHandler }) {
    return (
        <div className="container carousel w-full h-full my-10 mx-auto">
            <PreviousButton clickHandler={prevSlideHandler} />
            {/* track container*/}
            <Slide cardData={cardData} currentCardIndex={currentCardIndex} />
            {/* </div> */}
            <NextButton clickHandler={nextSlideHandler} />
        </div>
    )
}

function Portfolio() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const prevSlideHandler = () => {
        if (currentCardIndex !== 0) {
            setCurrentCardIndex(currentCardIndex - 1)
        } else if (currentCardIndex === 0) {
            setCurrentCardIndex(cardData.length - 1)
        }
    }
    const nextSlideHandler = () => {
        console.log("clicked")

        if (currentCardIndex !== cardData.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1)
        } else if (currentCardIndex === cardData.length - 1) {
            setCurrentCardIndex(0)
        }
    }

    return (
        <section id="Portfolio" className="w-full  bg-white p-5">
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
                    cardData={cardData}
                    currentCardIndex={currentCardIndex}
                    prevSlideHandler={prevSlideHandler}
                    nextSlideHandler={nextSlideHandler}
                />
            </div>
        </section>
    )
}

export default Portfolio

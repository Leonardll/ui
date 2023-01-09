import SectionHeader from "../sectionHeader"
import Image from "next/image"
import { useState } from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
import { FaLink, FaGithub } from "react-icons/fa"
const cardData = [
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fcryptotracker.jpeg?alt=media&token=39dc4214-1a47-4560-8edb-43cbd6e99977",
        title: "Crypto Tracker",
        description:
            "My React Crypto Tracker, Introducing my first server side rendering app designed with Next.js and deployed on Firebase. First time are always a chalange but today i am proud to display it on my portfolio. The data are fetch from CoinGecko rest API, it was designed using functional component rather than class, useState and useEffect hooks.",
        link: "https://myreactcryptotracker.web.app/",
        github: "https://github.com/Leonardll/crypto-react",
    },
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2F1_RN_5KZaVN0xkUXKW4pnTFg.webp?alt=media&token=4ebb933b-888c-4659-891a-d98ba78ef65c",
        title: "Polypus",
        description:
            "Polypus is a decentralized application that allows users to borrow assets against the value of their own NFTs or to lend assets. The stack used is HTML, Tailwind CSS, Next JS, Fleek. The smart contract is written in Solidity and deployed on Polygon and Arbitrum Network. I was in charge of the front-end development and the smart contract integration. The project received two awards for best Polygon and Arbitrum application as well as Compound Labs Pool Prize.",
        link: "morning-king-0051.on.fleek.co",
        github: "https://github.com/npasquie/best-nft-as-collateral",
    },
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2FchainlinkHackathon%20(1).png?alt=media&token=e5f34ae5-fba8-4b83-88ba-143768c49e98",
        title: "The Raffle House",
        description:
            "The Raffle House is a decentralized application that allows users to create raffles and sell tickets to them. The stack used is HTML,  Tailwind CSS, Next JS, Fleek. The smart contract is written in Solidity and deployed on Polygon and Arbitrum Network. I was in charge of the front-end development and the smart contract integration. The project is still in development but I am proud to be finalist and win the prizes for the best Polygon and Arbitrum project.",
        link: "https://wild-dream-9169.on.fleek.co/",
        github: "https://github.com/LEO-TEAM-CHAINLINK-HACKATHON/NFTLOTTERY1",
    },
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fhands.jpg?alt=media&token=43dbebfe-5b91-42e2-bacd-85987a5fe76b",
        title: "Unico Hogar",
        description:
            "First freelance assignment for a Barcelona-based Real Estate Concierge service. The stack used is HTML, CSS, Bootstrap, Framer-Motion, SCSS, Next JS, Vercel.",
        link: "https://www.unicohogar.com/",
        github: "https://github.com/Leonardll/unicoHogar",
    },
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fcity-scoot-banner.jpg?alt=media&token=7e3bab11-c46f-4815-8be9-fa57abbf94bf",
        title: "City Scoot",
        description:
            "City Scoot is my first child. This is my first public website. This app was part of the final assignment that granted me my Computer Science Foundation Degree. HTML, CSS, Bootstrap, SCSS, Javascript, and Firebase make up the stack.",
        link: "https://cityscoot-d6c37.web.app/",
        github: "https://github.com/Leonardll/City-Scoot",
    },
]

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
function CardItem({ imgSrc, title, description }) {
    return (
        <CardGradient>
            <div className="flex flex-col auto-rows-min text-white	 bg-[#1a252f] justify-center items-center w-full rounded-xl">
                <Image
                    src={imgSrc}
                    width={200}
                    height={150}
                    alt={title}
                    className=" rounded-t-lg  overflow-hidden object-cover object-center h-full w-full"
                />

                <h2 className="p-3 text-xl text-center">{title}</h2>

                <p className="text-justify text-lg w-full p-5">{description}</p>
                <div className="flex justify-center items-center">
                    {iconsData.map((item) => (
                        <IconGradient key={item.id} children={item.icon} />
                    ))}
                </div>
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
        <div className="container carousel w-full  my-10 mx-auto">
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

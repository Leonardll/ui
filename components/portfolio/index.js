import SectionHeader from "../sectionHeader"
import Image from "next/image"
import { useState } from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
import { FaLink, FaGithub } from "react-icons/fa"
import Link from "next/link"
const cardData = [
    // {
    //     imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fcryptotracker.jpeg?alt=media&token=39dc4214-1a47-4560-8edb-43cbd6e99977",
    //     title: "Crypto Tracker",
    //     description:
    //         "My React Crypto Tracker, Introducing my first server side rendering app designed with Next.js and deployed on Firebase. First time are always a chalange but today i am proud to display it on my portfolio. The data are fetch from CoinGecko rest API, it was designed using functional component rather than class, useState and useEffect hooks.",
    //     link: "https://myreactcryptotracker.web.app/",
    //     github: "https://github.com/Leonardll/crypto-react",
    // },
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2F1_RN_5KZaVN0xkUXKW4pnTFg.webp?alt=media&token=4ebb933b-888c-4659-891a-d98ba78ef65c",
        title: "Polypus",
        description:
            "Polypus is a decentralized application that enables users to borrow assets using the value of their NFTs as collateral, or to lend assets. The technology stack used for this project includes HTML, Tailwind CSS, Next JS, and Fleek. The smart contract is written in Solidity and deployed on the Polygon and Arbitrum networks. I was responsible for the front-end development and integration of the smart contract. The project has received recognition and awarded as the best application on Polygon and Arbitrum, as well as the Compound Labs Pool Prize.",
        link: "https://morning-king-0051.on.fleek.co/",
        github: "https://github.com/npasquie/best-nft-as-collateral",
    },
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2FchainlinkHackathon.png?alt=media&token=09bc96a0-2daa-40f1-853f-331a12977113",
        title: "The Raffle House",
        description:
            "The Raffle House is a decentralized application that enables users to participate in fair raffles for an opportunity to win a variety of prizes, including fancy sneakers, artifacts, cars, motorbikes, and real estate derivatives. As project manager, I was in charge of overseeing the full-stack development during the Chainlink Hackathon in 2022. The technology stack used includes HTML, Tailwind CSS, Next JS, and Fleek. The smart contract, written in Solidity, is currently being tested on the testnet while the project is still in development. We are actively seeking ways to tokenize real-world assets and production chains in order to reduce the trust factor and enhance transparency in the raffle process. Development is ongoing.",
        link: "https://wild-dream-9169.on.fleek.co/",
        github: "https://github.com/LEO-TEAM-CHAINLINK-HACKATHON/NFTLOTTERY1",
    },
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fhands.jpg?alt=media&token=43dbebfe-5b91-42e2-bacd-85987a5fe76b",
        title: "Unico Hogar",
        description:
            "My first freelance assignment was for a Barcelona-based Real Estate Concierge service. I utilized the following technology stack: HTML, CSS, Bootstrap, Framer-Motion, SCSS, and Next JS. The website was deployed on Vercel",
        link: "https://www.unicohogar.com/",
        github: "https://github.com/Leonardll/unicoHogar",
    },
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fcity-scoot-banner.jpg?alt=media&token=7e3bab11-c46f-4815-8be9-fa57abbf94bf",
        title: "City Scoot",
        description:
            "City Scoot is my first web development project that I am proud of. It was my first public website and also it was my final assignment for my Computer Science Foundation Degree. The technology stack that I used includes HTML, CSS, Bootstrap, SCSS, Javascript, and Firebase.",
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
                    className="rounded p-3 font-semi-bold m-2 bg-[#1abc9c] text-white"
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
                <Link key={index} href={item.id !== 2 ? link : github}>
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
            className=" active h-[3em] w-[3em] z-[2] translate-y-[10vh]  absolute carousel-control-prev left-[calc(10%+1.5em)] top-[calc(45%-20px)] md:top-[50%] flex items-center justify-center"
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
            className=" active h-[3em] w-[3em] carousel-control-next opacity-[0.5]  absolute  z-[2] translate-y-[10vh] flex items-center justify-center right-[calc(10%+1.5em)] top-[calc(45%-20px)] md:top-[50%] "
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
                        key={item.title}
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

function Portfolio() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [isClamped, setIsClamped] = useState(true)
    const prevSlideHandler = () => {
        if (currentCardIndex !== 0) {
            setIsClamped(true)
            setCurrentCardIndex(currentCardIndex - 1)
        } else if (currentCardIndex === 0) {
            setIsClamped(true)
            setCurrentCardIndex(cardData.length - 1)
        }
    }
    const nextSlideHandler = () => {
        console.log("clicked")

        if (currentCardIndex !== cardData.length - 1) {
            setIsClamped(true)
            setCurrentCardIndex(currentCardIndex + 1)
        } else if (currentCardIndex === cardData.length - 1) {
            setIsClamped(true)
            setCurrentCardIndex(0)
        }
    }

    return (
        <section id="portfolio" className="w-full  bg-white p-5">
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

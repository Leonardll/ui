import Image from "next/image"
import Divider from "../divider"

const cardData = [
    {
        id: "html",
        title: "HTML",
        url: "/html1.svg",
    },
    {
        id: "css",
        title: "CSS",
        url: "/CSS3.svg",
    },
    {
        id: "js",
        title: "JS",
        url: "/js.svg",
    },
    {
        id: "node",
        title: "Node",
        url: "/node.svg",
    },
    {
        id: "next",
        title: "Next",
        url: "/next.svg",
    },
    {
        id: "mongo",
        title: "Mongo",
        url: "/mongo.svg",
    },
    {
        id: "firebase",
        title: "Firebase",
        url: "/firebase.svg",
    },
    {
        id: "bootstrap",
        title: "Bootstrap",
        url: "/bootstrap.svg",
    },
    {
        id: "tailwind",
        title: "Tailwind",
        url: "/tailwing1.svg",
    },
    {
        id: "solidity",
        title: "Solidity",
        url: "/solidity.svg",
    },
    {
        id: "hardhat",
        title: "Hardhat",
        url: "/hardhat.svg",
    },
    {
        id: "moralis",
        title: "Moralis",
        url: "/moralis1.svg",
    },
]

function CardItem({ cardUrl, cardTitle }) {
    return (
        <div className="bg-white flex flex-col justify-center rounded-lg shadow-xl p-5 mx-auto overflow-hidde">
            <Image
                src={cardUrl}
                height={150}
                width={200}
                alt={cardTitle}
                object-fit="cover"
                className="w-full h-full mt-3 object-fill"
            />
            <div className="text-center m-3">
                <h3 className="font-bold p-3">{cardTitle}</h3>
            </div>
        </div>
    )
}
function Stack() {
    return (
        <section id="stack">
            <div className="container  my-4 mx-auto">
                <div className="text-center text-[#2c3e50] text-5xl mt-3">
                    <h1>Stack</h1>
                </div>
                <Divider
                    bgColor={"bg-[#2c3e50]"}
                    borderColor={"border-[#2c3e50]"}
                    textColor={"text-[#2c3e50]"}
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 place-items-stretch place-content-center m-5">
                    {cardData.map((card) => (
                        <CardItem key={card.id} cardUrl={card.url} cardTitle={card.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stack

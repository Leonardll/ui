import Image from "next/image"
import { forwardRef } from "react"
import Divider from "../divider"

function CardItem({ cardUrl, cardTitle }) {
    return (
        <div className="bg-white flex flex-col justify-center rounded-lg shadow-xl  mx-auto overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105  hover:bg-opacity-30 ">
            <Image
                src={cardUrl}
                height={150}
                width={200}
                alt={cardTitle}
                placeholder="blur"
                blurDataURL="https://picsum.photos/id/870/200/300?grayscale&blur=2"
                className="w-full h-full p-5 mt-3 object-scale-down object-center"
                priority={false}
            />
            <div className="text-center my-4 border-t shadow-t-sm w-full">
                <h3 className="font-bold p-5">{cardTitle}</h3>
            </div>
        </div>
    )
}
const StackSection = forwardRef(({ data, loader }, ref) => {
    return (
        <section ref={ref} className="mb-8 scroll-mt-24" id="stack">
            <div className="container  my-8 mx-auto">
                <div className="text-center text-[#2c3e50] text-5xl mt-3">
                    <h1>Stack</h1>
                </div>
                <Divider
                    bgColor={"bg-[#2c3e50]"}
                    borderColor={"border-[#2c3e50]"}
                    textColor={"text-[#2c3e50]"}
                />

                <div className="grid grid-cols-2 auto-rows-fr md:grid-cols-4 gap-2 md:gap-4 place-items-stretch place-content-center m-5">
                    {data.map((card) => (
                        <CardItem
                            key={card._id}
                            cardUrl={card.url}
                            cardTitle={card.title}
                            loader={loader}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
})
export default StackSection

import SectionHeader from "../sectionHeader"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const inputData = [
    {
        id: "1",
        type: "text",
        placeholder: "Name",
        ariaLabel: "Full Name",
    },
    {
        id: "2",
        type: "email",
        placeholder: "Email",
        ariaLabel: "email",
    },
    {
        id: "3",
        type: "tel",
        placeholder: "Phone Number",
        ariaLabel: "Phone Number",
    },
    {
        id: "4",
        type: "text",
        placeholder: "Message",
        ariaLabel: "Message",
    },
]

function FormItems() {
    return (
        <form action="" className="col-span-1 p-5 mx-auto">
            {inputData.map((input) => {
                return input.placeholder === "Message" ? (
                    <textarea
                        className=" bg-transparent placeholder-white border-b-4 border-white w-full text-3xl text-black min-h-[8em] py-3 focus:outline-none"
                        type={input.type}
                        placeholder={input.placeholder}
                        aria-label={input.ariaLabel}
                    />
                ) : (
                    <input
                        key={input.id}
                        className=" bg-transparent placeholder-white border-b-4 border-white w-full text-3xl text-white py-3 focus:outline-none"
                        type={input.type}
                        placeholder={input.placeholder}
                        aria-label={input.ariaLabel}
                    />
                )
            })}
        </form>
    )
}
function Formbutton() {
    return (
        <button className="bg-white w-[5em] text-[#1abc9c] text-xl font-semibold rounded px-4 py-2 m-5">
            Send{" "}
        </button>
    )
}
function FormContainer() {
    return (
        <div className="container mx-auto w-full md:w-1/2">
            <div className="grid grid-cols-1  place-content-center place-items-center px-3 py-5">
                <FormItems />
                <Formbutton />
            </div>
        </div>
    )
}

function SubFooter() {
    return (
        <div className="grid grid-cols-1 mx-auto md:grid-cols-3 w-full p-5 md:p-10 bg-[#2c3e50] place-content-center gap-3">
            <div className="col-span-1 p-2 md:p-5 ">
                <h1 className="text-white text-3xl font-semibold p-3">Location</h1>
                <p className="text-white text-xl font-semibold p-2 md:p-4 m-2">
                    London, United Kingdom
                </p>
            </div>
            <div className="col-span-1 p-2 md:p-5 ">
                <h1 className="text-white text-3xl font-semibold p-3">Around The Web</h1>
                <div className="flex justify-center items-center">
                    <AiFillLinkedin className="text-white text-2xl rounded-full outline outline-4 h-[3em] w-[3em] m-2  py-2 px-4" />

                    <AiFillGithub className="text-white h-[3em] w-[3em] text-2xl rounded-full outline outline-4 py-2 m-2 px-4 " />
                </div>
            </div>
            <div className="col-span-1 p-2 md:p-5 ">
                <h1 className="text-white text-3xl font-semibold p-3">Mindset</h1>
                <p className="text-white text-lg font-semibold p-2">
                    "Knowledge economy is the only asset in which purchasing power only depends on
                    your attention and time. "
                </p>
                <p className="text-white text-lg font-semibold lead">Idriss Aberkane</p>
            </div>
        </div>
    )
}
function Contact() {
    return (
        <section id="Contact" className="w-full h-full bg-[#1abc9c] ">
            <div className="container w-full mx-auto">
                <SectionHeader
                    title={"Contact"}
                    titleColor={"text-white"}
                    bgColor={"bg-white"}
                    borderColor={"border-[#2c3e50]"}
                    textColor={"text-white"}
                />
            </div>
            <FormContainer />
            <SubFooter />
        </section>
    )
}

export default Contact

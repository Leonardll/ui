import SectionHeader from "../sectionHeader"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { ErrorMessage, Formik, useFormik } from "formik"
import * as yup from "yup"

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
        type: "number",
        placeholder: "Phone",
        ariaLabel: "Phone Number",
    },
    {
        id: "4",
        type: "text",
        placeholder: "Message",
        ariaLabel: "Message",
    },
]

const subFooterData = [
    {
        id: "location",
        title: "Location",
        content: "London, United Kingdom",
    },
    {
        id: "aroundTheWeb",
        title: "Around The Web",
        content: "",
    },
    {
        id: "mindset",
        title: "Mindset",
        content:
            "'Knowledge economy is the only asset in which purchasing power only depends on your attention and time. Idriss Aberkane'",
    },
]
const regEx = new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{7,32}$/)
const schema = yup.object().shape({
    Name: yup.string().min(3, "too short").max(15, "too long").required(" Name Required"),
    Email: yup.string().email("Invalid email").required(" Email Required"),
    Phone: yup
        .string()
        .matches(regEx, "Phone number is not valid")
        .min(11, "Phone must be 11 digits min")
        .required("Phone Required"),
    Message: yup.string().required(),
})
function FormItems({ formik }) {
    const { errors, touched } = formik

    return (
        <form action="" className="col-span-1 p-5 mx-auto">
            {inputData.map((input, index) => {
                return input.placeholder === "Message" ? (
                    <div key={input.id}>
                        <textarea
                            name={input.placeholder}
                            onChange={formik.handleChange(input.placeholder)}
                            className=" bg-transparent form-textarea placeholder-white border-b-4 border-t-0 border-r-0 border-l-0 border-white w-full text-3xl text-white min-h-[8em] py-3 focus:outline-0  focus:border-transparant focus:ring-transparent  focus:border-slate-300 focus:border-opacity-50"
                            type={input.type}
                            placeholder={input.placeholder}
                            aria-label={input.ariaLabel}
                            value={formik.values[input.placeholder]}
                        />
                        {errors[input.placeholder] && touched[input.placeholder] && (
                            <div className="flex w-full  bg-white bg-opacity-30 items-center content-center">
                                <p className="text-base p-3 capitalize text-red-700 font-medium bg-opacity-30">
                                    {" "}
                                    {errors[input.placeholder]}
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div key={input.id}>
                        <input
                            onChange={formik.handleChange(input.placeholder)}
                            name={input.placeholder}
                            className=" bg-transparent form-input placeholder-white border-b-4 border-t-0 border-r-0 border-l-0 border-white w-full text-3xl text-white py-3  focus:border-transparant focus:ring-transparent focus:ring-opacity-20 focus:border-slate-300 focus:border-opacity-50"
                            type={input.type}
                            placeholder={input.placeholder}
                            aria-label={input.ariaLabel}
                            value={formik.values[input.placeholder]}
                        />

                        {errors[input.placeholder] && touched[input.placeholder] ? (
                            <div className="flex w-full  bg-white bg-opacity-30 items-center content-center">
                                <p className="text-base p-3 capitalize text-red-700 font-medium bg-opacity-30">
                                    {" "}
                                    {errors[input.placeholder]}
                                </p>
                            </div>
                        ) : null}
                    </div>
                )
            })}
        </form>
    )
}
function Formbutton({ formik }) {
    return (
        <button
            onClick={formik.handleSubmit}
            type="submit"
            className="bg-white w-[5em] text-[#1abc9c] text-xl font-semibold rounded px-4 py-2 m-5"
        >
            Send{" "}
        </button>
    )
}
function FormContainer() {
    const formik = useFormik({
        initialValues: {
            Name: "",
            Email: "",
            Phone: "",
            Message: "",
        },
        validationSchema: schema,
        validateOnChange: true,
        onSubmit: async (values, actions) => {
            if (schema.validate(values, { abortEarly: true })) {
                const res = await fetch("/api/contact", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        data: values,
                        token: "token",
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data))
                    .catch((err) => console.log(err))
                actions.resetForm({ values: "" })
                alert("Message sent! Thank you\nWe will be in touch with you soon!")
            } else {
                alert("Please fill all the fields")
            }
        },
    })

    return (
        <Formik {...formik}>
            <div className="container mx-auto w-full md:w-1/2">
                <div className="grid grid-cols-1  place-content-center place-items-center px-3 py-5">
                    <FormItems formik={formik} />
                    <Formbutton formik={formik} />
                </div>
            </div>
        </Formik>
    )
}

function SubFooter() {
    return (
        <div className="grid grid-cols-1 mx-auto md:grid-cols-3 w-full p-3 md:p-10 bg-[#2c3e50] place-content-center gap-3">
            {subFooterData.map((data) => {
                return data.id === "aroundTheWeb" ? (
                    <div className="col-span-1 p-2 md:p-5 " key={data.id}>
                        <h1 className="text-white text-3xl font-semibold">{data.title}</h1>
                        <div className="flex flex-col md:flex-row  justify-around 2xl:justify-center items-center m-5">
                            <FaLinkedinIn className="text-white text-3xl rounded-2xl outline outline-4 m-2 h-full py-2 px-3 w-auto" />

                            <FaGithub className="text-white text-3xl  rounded-2xl outline outline-4 py-2 m-2 px-3 h-full w-auto" />
                        </div>
                    </div>
                ) : (
                    <div className="col-span-1 p-2 md:p-5 " key={data.id}>
                        <h1 className="text-white text-3xl font-semibold ">{data.title}</h1>
                        <p className="text-white text-lg w-full inline-block ont-semibold  p-2 md:p-4 m-2">
                            {data.content}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
function Contact() {
    return (
        <section id="contact" className="w-full scroll-mt-20 h-full bg-[#1abc9c] ">
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

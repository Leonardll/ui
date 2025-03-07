"use client";

import { Button } from "@/components/uiElemts/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/uiElemts/card";
import { Input } from "@/components/uiElemts/input";
import { Textarea } from "@/components/uiElemts/textArea";
import { Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";
import { motion } from "framer-motion";
import { Formik, Form, FormikHelpers } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { forwardRef, RefObject } from "react";

// Contact information data
const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Address",
    details: "Between London and Barcelona",
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    details: "convex@leonardlator.dev",
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Phone",
    details: "+44 7495 382 552",
  },
];

// Footer links
const footerLinks = [
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/leonardlator/",
  },
  {
    id: "github",
    title: "Github",
    link: "https://github.com/Leonardll",
  },
];

// Sub-footer data
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
];

// Validation schema
const pattern = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
const schema = yup.object().shape({
  name: yup.string().min(3, "too short").max(15, "too long").required(" Name Required"),
  email: yup.string().email("Invalid email").required(" Email Required"),
  subject: yup.string().min(3, "too short").max(15, "too long").required(" Subject Required"),
  message: yup.string().required(),
});

// Input fields data
const inputData = [
  {
    id: "1",
    type: "text",
    placeholder: "Name",
    ariaLabel: "Full Name",
    name: "name",
  },
  {
    id: "2",
    type: "email",
    placeholder: "Email",
    ariaLabel: "email",
    name: "email",
  },
  {
    id: "3",
    type: "text",
    placeholder: "Subject",
    ariaLabel: "Subject",
    name: "subject",
  },
  {
    id: "4",
    type: "text",
    placeholder: "Message",
    ariaLabel: "Message",
    name: "message",
  },
];

// Form Items Component
interface FormItemsProps {
  formik: any;
}
function FormItems({ formik }: FormItemsProps) {
  const { errors, touched } = formik;

  return (
    <>
      {inputData.map((input, index) => {
        return input.placeholder === "Message" ? (
          <div key={input.id}>
            <Textarea
              id={input.name}
              name={input.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-transparent form-textarea placeholder-muted-foreground w-full min-h-[120px] focus:outline-0   focus:ring-transparent focus:border-muted focus:border-opacity-50"
              placeholder={input.placeholder}
              aria-label={input.ariaLabel}
              value={formik.values[input.name]}
            />
            {errors[input.name] && touched[input.name] && (
              <div className="flex w-full   items-center content-center">
                <p className="text-base p-3 capitalize text-red-700 font-medium ">
                  {errors[input.name]}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div key={input.id}>
            <Input
              id={input.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name={input.name}
              className=" bg-transparent form-input placeholder-muted-foreground w-full   focus:border-transparant focus:ring-transparent focus:ring-opacity-20 focus:border-muted focus:border-opacity-50"
              type={input.type}
              placeholder={input.placeholder}
              aria-label={input.ariaLabel}
              value={formik.values[input.name]}
            />

            {errors[input.name] && touched[input.name] ? (
              <div className="flex w-full   items-center content-center">
                <p className="text-base p-3 capitalize text-red-700 font-medium ">
                  {errors[input.name]}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}

// Form Button Component
interface FormbuttonProps {
  formik: any;
}
function Formbutton({ formik }: FormbuttonProps) {
  return (
    <Button
      onClick={formik.handleSubmit}
      type="submit"
      className=" w-full text-xl font-semibold  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
    >
      Send{" "}
    </Button>
  );
}


interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
    created: string;
  }

const Contact = forwardRef<HTMLElement, {}>( (props, ref) => {

  return (
    <section ref={ref} id="contact" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <FadeIn direction="up">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question or want to work together? Reach out to us.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 mt-12">
          <StaggerContainer className="space-y-6" delay={0.3} staggerChildren={0.1}>
            {contactInfo.map((info, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {info.icon}
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn direction="left" delay={0.4}>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    created: "",
                  }}
                  validationSchema={schema}
                  onSubmit={async (values: ContactFormValues, actions: FormikHelpers<ContactFormValues>) => {
                    if (schema.validate(values, { abortEarly: true })) {
                      values.created = new Date().toISOString();
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
                        .then((data) => console.log(data, values))
                        .catch((err) => console.log(err));
                      actions.resetForm({});
                      alert("Message sent! Thank you\nWe will be in touch with you soon!");
                    } else {
                      alert("Please fill all the fields");
                    }
                  }}
                >
                  {(formik) => (
                    <Form className="space-y-4">
                      <FormItems formik={formik} />
                      <Formbutton formik={formik} />
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
});

export default Contact;

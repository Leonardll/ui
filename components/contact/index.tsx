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
    details: "London",
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
    content: "London",
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
    <div className="space-y-6">
      {inputData.map((input) => {
        return input.placeholder === "Message" ? (
          <div key={input.id} className="space-y-1">
            <Textarea
              id={input.name}
              name={input.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={input.placeholder}
              aria-label={input.ariaLabel}
              value={formik.values[input.name]}
              className="min-h-[150px]"
            />
            {errors[input.name] && touched[input.name] && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm px-2 text-destructive font-medium"
              >
                {errors[input.name]}
              </motion.p>
            )}
          </div>
        ) : (
          <div key={input.id} className="space-y-1">
            <Input
              id={input.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              aria-label={input.ariaLabel}
              value={formik.values[input.name]}
            />
            {errors[input.name] && touched[input.name] && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm px-2 text-destructive font-medium"
              >
                {errors[input.name]}
              </motion.p>
            )}
          </div>
        );
      })}
    </div>
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
      disabled={formik.isSubmitting}
      className="w-full text-lg h-14 font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] mt-6"
    >
      {formik.isSubmitting ? "Sending Project Data..." : "Send Message"}
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

const Contact = forwardRef<HTMLElement, {}>((props, ref) => {

  return (
    <section ref={ref} id="contact" className="w-full py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <FadeIn direction="up">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
                Get in Touch
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-display text-foreground">
                Let&apos;s Build Something Extraordinary
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
                Have a question or want to work together? I&apos;m always open to discussing new projects,
                creative ideas or opportunities to be part of your visions.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <StaggerContainer className="grid gap-6" delay={0.3} staggerChildren={0.1}>
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex items-center gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 group hover:bg-muted/50 transition-all"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="bg-primary/10 p-4 rounded-xl text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display">{info.title}</h3>
                      <p className="text-muted-foreground text-lg">{info.details}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-bold font-display mb-4">Social Presence</h3>
              <div className="flex gap-4">
                {footerLinks.map((link) => (
                  <Button key={link.id} variant="outline" size="lg" asChild className="rounded-2xl glass hover:scale-110 transition-transform">
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.id === 'github' ? <FaGithub className="h-5 w-5 mr-2" /> : <FaLinkedinIn className="h-5 w-5 mr-2" />}
                      {link.title}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <FadeIn direction="left" delay={0.4}>
            <Card className="glass-card border-white/10 p-2 overflow-hidden">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-display">Message Me</CardTitle>
                <CardDescription className="text-base">
                  I typically respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
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
Contact.displayName = 'Contact'; // Add this line

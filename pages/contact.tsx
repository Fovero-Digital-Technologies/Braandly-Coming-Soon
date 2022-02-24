import type { NextPage } from "next";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { FaFacebook, FaInstagram, FaTwitter, FaCircleNotch } from "react-icons/fa";
import { Tooltip, message } from "antd";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import emailjs from "emailjs-com";
import { FormEvent } from "react";

const Contact: NextPage = () => {
  interface Icons {
    tooltip: string;
    title: string;
    link: string;
    icon: JSX.Element;
    color?: string;
  }

  interface Message {
    from_name: string;
    from_email: string;
    to_name: string;
    message: string;
    reply_to: string;
  }

  const socialIcons: Icons[] = [
    {
      tooltip: "We're Waiting for you on Facebook",
      title: "Facebook",
      link: "https://www.facebook.com",
      icon: <FaFacebook />,
      color: "#4267B2"
    },
    {
      tooltip: "Follow our Instagram Page",
      title: "Instagram",
      link: "https://www.instagram.com",
      icon: <FaInstagram />,
      color: "#1DA1F2"
    },
    {
      tooltip: "Follow us on Twitter",
      title: "Twitter",
      link: "https://www.twitter.com",
      icon: <FaTwitter />,
      color: "#8a3ab9"
    }
  ];

  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [from_name, set_From_Name] = useState<string>("");
  const [from_email, set_From_Email] = useState<string>("");
  const [eMessage, setMessage] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const emailMessage = {
      from_name,
      from_email,
      to_name: process.env.NEXT_PUBLIC_EMAILJS_EMAILNAME
        ? process.env.NEXT_PUBLIC_EMAILJS_EMAILNAME
        : "Braandly",
      message: eMessage,
      reply_to: from_email
    };

    console.log(emailMessage);
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_EMAILJS1_SERVICEID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS1_TEMPLATEID}`,
        emailMessage,
        `${process.env.NEXT_PUBLIC_EMAILJS1_USERID}`
      )
      .then(
        (response) => {
            setLoading(false)
        //   console.log("SUCCESS!", response.status, response.text);
          message.success("Message sent successfully")
          setSent(true)
        },
        (err) => {
            setLoading(false)
          console.log("FAILED...", err);
        //   message.error("An error occured, please try again")
        }
      );
  };

  //   console.log("env",process.env.NEXT_PUBLIC_EMAILJS_SERVICEID)
  //   console.log("env",process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID)
  //   console.log("env",process.env.NEXT_PUBLIC_EMAILJS_EMAILADDRESS)
  //   console.log("env",process.env.NEXT_PUBLIC_EMAILJS_EMAILNAME)

  return (
    <DefaultLayout
      title="Contact Braandly"
      desc="Have any questions about our Branding Software? Let us Know now"
    >
      <div className="pt-20 text-lg">
        <div className="px-4 lg:px-10 max-w-[500px] pb-40">
          <h1 className="text-3xl md:text-5xl font-bold mb-5 dark:text-white leading-loose">
            Want to Get in Touch?
          </h1>
          <p className="">
            Contact us now if you have some questions/enquiries about our
            branding software
          </p>
        </div>

        <div className="bg-primary dark:bg-dark-background grid grid-cols-1 lg:grid-cols-12 px-4 lg:px-10 pb-20">
          <div className="lg:col-span-5 pt-10 text-white mb-10">
            <h2 className="mb-5 text-2xl font-bold text-white">
              Follow us on Social today
            </h2>
            <div className="flex flex-col gap-3">
              {socialIcons.map((icon) => (
                <Tooltip key={icon.title} title={icon.tooltip}>
                  <a
                    className={`inline-flex items-center gap-2 bg-[${icon.color}] rounded-full px-4 py-2 w-fit`}
                  >
                    <span>{icon.icon}</span>
                    <span>{icon.title}</span>
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 bg-white dark:bg-dark p-10 shadow-lg lg:-mt-32 rounded border border-2 border-primary dark:border-white">
            {!sent && (
              <>
                <p className="mb-10 text-2xl font-bold">
                  We&apos;d Love to hear from you!!!
                </p>
                <form className="" onSubmit={onSubmit}>
                  <div className="block mb-6">
                    <TextField
                      id="standard-basic"
                      label="Your Name"
                      variant="standard"
                      className="block w-full dark:text-light"
                      onChange={(e) => set_From_Name(e.target.value)}
                      required
                    />
                  </div>
                  <div className="block mb-6">
                    <TextField
                      id="standard-basic"
                      label="Email Address"
                      variant="standard"
                      type="email"
                      className="block w-full"
                      onChange={(e) => set_From_Email(e.target.value)}
                      required
                    />
                  </div>
                  <div className="block mb-6">
                    <TextField
                      id="standard-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      variant="standard"
                      className="w-full"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex mt-10">
                    {!loading && <input
                      type="submit"
                      value="Send Message"
                      className="w-full bg-primary text-white text-lg dark:bg-warning px-4 py-2 rounded cursor-pointer"
                    />}
                    {loading && <div
                      className="w-full bg-primary text-white text-lg dark:bg-warning px-4 py-2 rounded cursor-pointer opacity-80 inline-flex items-center gap-5 cursor-wait justify-center"
                    ><span>Sending...</span> <FaCircleNotch className="animate-spin" /></div>}
                  </div>
                </form>
              </>
            )}
            {sent && (
              <>
                <p className="mb-10 text-2xl font-bold">
                  Thanks for reaching out
                </p>
                <p className="mb-10 text-4xl font-bold text-primary dark:text-warning">
                  Please check your email for confirmation...
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contact;

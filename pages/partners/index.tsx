import { useState, useEffect } from "react";
import Image from "next/image";
import { connect, useDispatch } from "react-redux";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import TextField from "@material-ui/core/TextField";
// import emailjs from "emailjs-com";
import { FormEvent } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { Tooltip, message } from "antd";
import axios from "axios";
import { baseUrl } from "../../server/index";

interface Partners {
  fullname: string;
  email: string;
  companyname: string;
  phonenumber: string;
  location: string;
  message: string;
}

function Partners() {
  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [fullname, setFromName] = useState<string>("");
  const [companyname, setCompanyName] = useState<string>("");
  const [phonenumber, setPhoneNumber] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [email, setFromEmail] = useState<string>("");
  const [eMessage, setMessage] = useState<string>("");

  // const onSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   // setLoading(true);
  //   const body = {
  //     fullname, email, companyname, phonenumber, location, message
  //   }
  //   console.log(body)

  // };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const body: Partners = {
      fullname,
      email,
      companyname,
      phonenumber,
      location,
      message: eMessage,
    };

    // console.log(body);

    try {
      const response = await axios.post(`${baseUrl}/mails/partner`, body, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      console.log("SUCCESS!", response);
      message.success(response.data.message);
      setSent(true);
    } catch (err: any) {
      console.log("FAILED...", { err });
      let errorObject;

      if (err.response) {
        if (err.response.data.message) {
          errorObject = JSON.parse(err.response.data.message);
          if (errorObject.title === "Member Exists") {
            message.success(
              "Thanks for your interest, we will get back shortly"
            );
            setSent(true);
          } else {
            message.error("Unable to send request. Please try again");
          }
        } else {
          message.error("Unable to send request. Please try again");
        }
      } else {
        message.error(`Error Sending Request. - ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DefaultLayout
        title="Become a Partner"
        desc="Partner with Braandly and gain amazing benefits"
      >
        <div className="w-full dark:bg-dark dark:bg-text-white">
          <div className="container mx-auto  py-20 px-5 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-7 pt-5 gap-5">
              <div className="flex flex-col justify-center col-span-3">
                <h1 className="text-5xl md:text-6xl font-bold mb-5 dark:text-white leading-normal lg:leading-relaxed">
                  <span className="text-primary dark:text-warning">
                    Join, Partner and Gain Limitless Opportunities
                  </span>{" "}
                  With Braandly
                </h1>

                <p className="text-xl leading-loose mb-5">
                  Braandly is currently searching for interested partners like
                  you to invest in our software as we make global impact in the
                  branding and marketing industry.
                </p>

                <a
                  href="#partners_form"
                  className="bg-primary block dark:bg-warning text-2xl rounded text-white hover:text-white rounded px-6 py-3 font-medium w-full md:w-1/2 text-center"
                >
                  Get Started
                </a>
              </div>
              <div className="hidden lg:flex justify-center lg:col-span-4">
                <Image
                  src="/svg/collaborators.svg"
                  alt="Get Started with Braandly Partnership"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>

          <hr className="border-light-border dark:border-dark-border" />

          <div className="py-20 px-5 lg:px-0">
            <div className="text-center mx-auto max-w-[700px]">
              <h2 className="text-4xl font-bold mb-5 dark:text-white leading-tight ">
                Giving You Amazing Benefits
              </h2>
              <p className="text-lg leading-tight mb-5">
                We are excited to invite you to join a vision which would
                revolutionize branding coupled with amazing offers for you.
              </p>
            </div>

            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-8 items-center">
                <Image
                  src="/svg/solution.svg"
                  alt="Lifetime Premium Access at Braandkly"
                  width={500}
                  height={400}
                />
                <div>
                  <h3 className="text-4xl font-bold mb-5 dark:text-white leading-tight">
                    Lifetime Premium Access!!!
                  </h3>
                  <p className="text-lg leading-tight mb-5">
                    As a valued partner, we will give you a continuous access to
                    the premium version of our software/apps. This would be a
                    profitable investment which would save you great costs on
                    your brand/bussiness.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-5 dark:text-white leading-tight">
                    And More Benefits!!!
                  </h2>
                  <p className="text-lg leading-tight mb-5">
                    We have planned a lot of benefits and returns for you
                    including premium consultation and support, early access to
                    new features and recognition on our digital platforms.
                  </p>
                </div>
                <Image
                  src="/svg/solution.svg"
                  alt="More Benefits from Braandly"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>

          <div
            className="bg-primary dark:bg-dark-background py-10 px-5 mb-52"
            id="partners_form"
          >
            {!sent && (
              <>
                <div className="container mx-auto text-center max-w-[700px]">
                  <h3 className="text-5xl font-bold mb-5 text-white">
                    Become a Partner to Braandly today.
                  </h3>
                  <p className="text-white text-lg leading-tight mb-10">
                    Fill up the form and let us begin a beautiful partnership.
                  </p>
                </div>

                <div className="rounded bg-white dark:bg-dark px-8 py-10 mx-auto -mb-32 shadow-xl max-w-[600px]">
                  <form onSubmit={onSubmit}>
                    <div className="block mb-6">
                      <TextField
                        id="standard-basic"
                        label="Your Name"
                        variant="standard"
                        className="block w-full dark:text-white"
                        required
                        onChange={(e) => setFromName(e.target.value)}
                      />
                    </div>
                    <div className="block mb-6">
                      <TextField
                        id="standard-basic"
                        label="Company Name"
                        variant="standard"
                        className="block w-full dark:text-light"
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div className="block mb-6">
                      <TextField
                        id="standard-basic"
                        label="Phone Number"
                        variant="standard"
                        type="number"
                        className="block w-full"
                        required
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="block mb-6">
                      <TextField
                        id="standard-basic"
                        label="Business Email"
                        variant="standard"
                        type="email"
                        className="block w-full"
                        required
                        onChange={(e) => setFromEmail(e.target.value)}
                      />
                    </div>
                    <div className="block mb-6">
                      <TextField
                        id="standard-basic"
                        label="Location/Address"
                        variant="standard"
                        type="text"
                        className="block w-full"
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className="block mb-6">
                      <TextField
                        id="standard-multiline-static"
                        label="Additional Details"
                        placeholder="Tell us about yourself and your brand"
                        multiline
                        rows={4}
                        variant="standard"
                        className="w-full"
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="flex">
                      {!loading && (
                        <input
                          type="submit"
                          value="Join Partners"
                          className="w-full bg-primary text-white text-lg dark:bg-warning px-4 py-2 rounded cursor-pointer"
                        />
                      )}

                      {loading && (
                        <div className="w-full bg-primary text-white text-lg dark:bg-warning px-4 py-2 rounded cursor-pointer opacity-80 inline-flex items-center gap-5 cursor-wait justify-center">
                          <span>Sending...</span>{" "}
                          <FaCircleNotch className="animate-spin" />
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </>
            )}

            {sent && (
              <div className="container mx-auto text-center max-w-[700px]">
                <h3 className="text-5xl font-bold mb-5 text-white">
                  Thanks for your partnership interest
                </h3>
                <p className="text-white text-2xl leading-tight mb-10">
                  We are so glad you took an interest in our project
                </p>
                <p className="text-white text-xl leading-tight mb-10 dark:text-warning font-bold animate-pulse">
                  We would get back to you in less than 24 hours...
                </p>
              </div>
            )}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Partners;

import { useState, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { FaCircleNotch } from "react-icons/fa";
import { Tooltip, message } from "antd";
import axios from "axios";
import { baseUrl } from "../../server/index";

interface Waitlist {
  fullname: string;
  email: string;
}

const SignUp = () => {
  const [signedUp, setSignedUp] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const body: Waitlist = {
      fullname: `${firstname} ${lastname}`,
      email,
    };

    // console.log(body);

    try {
      const response = await axios.post(`${baseUrl}/mails/waitlist`, body, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      console.log("SUCCESS!", response);
      message.success(response.data.message);
      setSignedUp(true);
    } catch (err: any) {
      console.log("FAILED...", { err });
      let errorObject;

      if (err.response) {
        if (err.response.data.message) {
          errorObject = JSON.parse(err.response.data.message);
          if (errorObject.title === "Member Exists") {
            message.error(
              "You're already on the early access list. Perhaps you could try another email address?",
              10
            );
          } else {
            message.error("Unable to add. Please try again");
          }
        } else {
          message.error("Unable to add. Please try again");
        }
      } else {
        message.error(`Unable to add. - ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        id="waitlist"
        className="bg-primary dark:bg-dark-background border border-primary dark:border-white rounded px-4 py-10 mb-20"
      >
        {!signedUp ? (
          <>
            <h3 className="text-2xl md:text-4xl font-bold mb-5 text-white leading-loose text-center">
              <span className="underline">Get Early Access</span> and be the
              first to <span className="underline">Get Notified</span>
            </h3>
            <p className="text-xl leading-loose text-center text-white">
              I really want you to be the first person to use our amazing
              branding software.
            </p>
            <p className="text-xl leading-loose text-center text-white">
              So, just put in your details now and rest easy...
            </p>
            <form
              className=" bg-white dark:bg-dark shadow-lg rounded mx-auto max-w-[700px] px-5 lg:px-10 py-5 lg:py-10  mt-8 -mb-24 border border-white"
              onSubmit={onSubmit}
            >
              <div className="block mb-6">
                <TextField
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                  required
                  className="block w-full dark:text-light"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="block mb-6">
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                  required
                  className="block w-full dark:text-light"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="block mb-6">
                <TextField
                  id="standard-basic"
                  label="Email Address"
                  variant="standard"
                  type="email"
                  required
                  className="block w-full"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex mt-10">
                {!loading && (
                  <input
                    type="submit"
                    value="Join Waitlist"
                    className="w-full bg-primary hover:bg-primary-hov text-white text-lg dark:bg-warning dark:hover:bg-warning-hov px-4 py-2 rounded cursor-pointer dark:text-dark transition-all duration-300 ease-in-out"
                  />
                )}
                {loading && (
                  <div className="w-full bg-primary text-white text-lg dark:bg-warning dark:text-dark px-4 py-2 rounded opacity-80 inline-flex items-center gap-5 cursor-wait justify-center transition-all duration-300 ease-in-out">
                    <span>Sending...</span>{" "}
                    <FaCircleNotch className="animate-spin" />
                  </div>
                )}
              </div>
            </form>
          </>
        ) : (
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-5 text-white leading-loose text-center">
              👍 Congratulations
            </h3>
            <p className="text-xl text-center text-white">
              ✔️ You will be notified once we launch
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;

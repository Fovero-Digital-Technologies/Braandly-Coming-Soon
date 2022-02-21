import { useState } from "react";
import TextField from "@material-ui/core/TextField";
// import MailchimpSubscribe from "react-mailchimp-subscribe"

const SignUp = () => {
  const [signedUp, setSignedUp] = useState<boolean>(false);

  const url:string = 'https://braandly.us20.list-manage.com/subscribe/post'
  return (
    <>
      <div className="bg-primary dark:bg-dark-background border border-primary dark:border-white rounded px-4 py-10 mb-20">
        {!signedUp ? (
          <>
            <h3 className="text-2xl md:text-4xl font-bold mb-5 text-white leading-loose text-center">
              Be The First To <span className="underline">Get Notified</span>
            </h3>
            <p className="text-xl leading-loose text-center text-white">
              I really want you to be the first person to use our amazing
              branding software.
            </p>
            <p className="text-xl leading-loose text-center text-white">
              So, just put in your details now and rest easy...
            </p>
            <form className=" bg-white dark:bg-dark shadow-lg rounded mx-auto max-w-[700px] px-5 lg:px-10 py-5 lg:py-10  mt-8 -mb-24 border border-white">
              <div className="block mb-6">
                <TextField
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  className="block w-full dark:text-light"
                />
              </div>
              <div className="block mb-6">
                <TextField
                  id="standard-basic"
                  label="Email Address"
                  variant="standard"
                  type="email"
                  className="block w-full"
                />
              </div>
              <div className="flex mt-10">
                <input
                  type="submit"
                  value="Get Notified"
                  className="w-full bg-primary text-white text-lg dark:bg-warning px-4 py-2 rounded cursor-pointer"
                />
              </div>
            </form>
          </>
        ) : (
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-5 text-white leading-loose text-center">
            👍 Congratulations
            </h3>
            <p className="text-xl text-center text-white">✔️ You will be notified once we launch</p>
             
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;

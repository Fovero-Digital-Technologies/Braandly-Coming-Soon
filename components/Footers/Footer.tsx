import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="">
      <div
        className={`flex justify-between items-center px-4 pt-4 py-3 bg-light-2 dark:bg-dark-background`}
      >
        <div>
          <Image
            src="/img/logo/Braandly.svg"
            alt="Braandly Developer and designers tools"
            width={70}
            height={28}
          />
        </div>
        <span
          className="text-center text-base dark:text-white"
          style={{ width: "96%" }}
        >
          &copy; {new Date().getFullYear()} Braandly by{" "}
          <a
            href="https://www.ayomideodewale.com"
            className={`text-primary dark:text-warning`}
            target="_blank"
            rel="noreferrer"
          >
            Odewale Ayomide
          </a>{" "}
          @{" "}
          <a
            href="https://www.foverotechnologies.com"
            className={`text-primary dark:text-warning`}
            target="_blank"
            rel="noreferrer"
          >
            Fovero Digital Technologies
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// import MasterLayout from './MasterLayout';
const MainHeader = dynamic(
  () => import("../Headers/Mainheader"),
  // { ssr: false }
)
const Mobileheader = dynamic(
  () => import("../Headers/Mobileheader"),
  // { ssr: false }
)
const Footer = dynamic(
  () => import("../Footers/Footer"),
  // { ssr: false }
)
// import MainHeader from "../Headers/Mainheader";
// import Mobileheader from "../Headers/Mobileheader";
import Metadata from "../Headers/Partials/Metadata";
import Notificationheader from "../Headers/Notifications/Notificationheader";
// import Footer from '../Footers/Footer';
import { connect, useDispatch } from "react-redux";

type Props = {
  title: string;
  desc: string;
  children: JSX.Element;
};

const DefaultLayout = (props: Props) => {

  return (
    <>
      <Metadata
        title={props.title}
        metadescription={props.desc}
      />
      <Notificationheader />
      <MainHeader />
      <Mobileheader />
      <div className="h-full dark:bg-dark dark:text-light">
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;

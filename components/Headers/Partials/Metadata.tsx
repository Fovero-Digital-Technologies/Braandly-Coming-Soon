import React from "react";
import Head from 'next/head';

type Props = {
  title: string;
  metadescription: string | undefined;
};

const Metadata = ({ title, metadescription }: Props) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maxiumum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={`${metadescription}`} />
      <title>{title} | {metadescription}</title>
      <link rel="icon" href="/img/logo/favicon.png" />
    </Head>
  );
};

export default Metadata;

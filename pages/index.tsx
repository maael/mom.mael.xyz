import { useState } from "react";
import { Document, Page } from "react-pdf";
import Head from "next/head";
import Loader from "react-spinners/RiseLoader";

function Home() {
  const [pageNumber] = useState(1);
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Head>
        <title>Mansions of Madness | Reference Sheet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        body {
          background-color: #f7d7a6;
          margin: 0;
          overflow-x: hidden;
          overflow: -moz-scrollbars-none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          width: 0 !important;
        }
      `}</style>
      <Document file="/mansions-reference-sheet.pdf" loading={() => <Loader />}>
        <Page
          pageNumber={pageNumber}
          width={
            // tslint:disable-next-line:strict-type-predicates
            typeof window !== "undefined" ? document.body.clientWidth : 300
          }
        />
      </Document>
    </div>
  );
}

export default Home;

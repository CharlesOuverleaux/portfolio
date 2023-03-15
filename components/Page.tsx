import React, { FC } from "react";
import type { NextPage } from "next";
import { Header, Footer } from "../components";

const Body: FC = ({ children }) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};

const Container: FC = ({ children }) => {
  return <div className="flex-grow">{children}</div>;
};

export const Page: NextPage = ({ children }) => {
  return (
    <Body>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Body>
  );
};

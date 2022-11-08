import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

export default function Layout({ children }: any) {
  const router = useRouter();
  const isClient = typeof window === "object";
  const getSize = () => {
    return { width: isClient ? window.innerWidth : undefined };
  };
  const [windowSize, setWindowSize] = useState(getSize);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div>{children}</div>
      {windowSize.width > 768 && router.pathname === "/join" ? (
        <Footer />
      ) : null}

      {windowSize.width > 768 && router.pathname === "/login" ? (
        <Footer />
      ) : null}
      {windowSize.width > 768 && router.pathname === "/products" ? (
        <Footer />
      ) : null}

      {router.pathname === "/" ? <Footer /> : null}
    </>
  );
}

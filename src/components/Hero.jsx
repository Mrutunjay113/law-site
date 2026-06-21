"use client";

import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import PageWrapper from "./PageWrapper";
import { TypingAnimation } from "./ui/typing-animation";

export default function Hero() {
  return (
    <header
      className="flex flex-row items-start justify-center px-0 mx-0 h-[calc(100vh-80px)] relative -mt-16 pt-16"
      style={{
        backgroundImage: "url('/images/bg-parallax3.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <PageWrapper className="flex flex-col lg:flex-row items-center justify-start px-4 mx-0 min-h-screen relative">
        <div className="absolute inset-0 z-0"> </div>
        <div className="w-full lg:w-1/2 my-10">
          <div className="flex flex-col lg:pr-40 pt-20 items-center lg:items-start justify-start min-h-screen text-center lg:text-left">
            <span className="text-sm font-medium text-primary">
              Welcome to our law firm
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider text-white leading-tight">
              <TypingAnimation startOnView className="block">
                Your Trusted Legal Partner for Peace of Mind
              </TypingAnimation>
            </h1>
            <p className="text-sm sm:text-md font-normal mt-6 lg:mt-10 text-white/70 max-w-2xl">
              Expert Legal Solutions in Civil, Criminal, and Corporate Law.
              Committed to protecting your rights with integrity and excellence.
            </p>
            <div className="flex flex-row items-center justify-center lg:justify-start mt-5">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer"
                aria-label="Scroll to contact section"
              >
                <Button
                  size={"lg"}
                  className="text-sm sm:text-md"
                  role="button"
                  aria-label="Schedule a free consultation"
                >
                  <PhoneIcon className="w-4 h-4 mr-1" aria-hidden="true" />
                  Contact Us
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </PageWrapper>
    </header>
  );
}

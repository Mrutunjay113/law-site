import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import PageWrapper from "./PageWrapper";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <>
      <div
        className="flex flex-row items-start justify-center px-0 mx-0 min-h-screen relative -mt-16 pt-16"
        style={{
          backgroundImage: "url('/images/home-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <PageWrapper className="flex flex-row items-start justify-start px-0 mx-0 min-h-screen relative">
          <div className="absolute inset-0 z-0"> </div>
          <div className=" min-h-screen bg  w-1/2 my-10">
            <div className="flex flex-col md:pr-40 pt-20  items-start justify-start min-h-screen ">
              <span className="text-sm font-medium text-primary ">
                Welcome to our law firm
              </span>
              <h1 className="text-7xl font-bold tracking-wider text-white ">
                Your Trusted Legal Partner for Peace of Mind
              </h1>
              <p className="text-md  font-normal mt-10 text-white/70 ">
                Expert Legal Solutions in Civil, Criminal, and Corporate Law.
                Committed to protecting your rights with integrity and
                excellence.
              </p>
              <div className="flex flex-row items-center justify-start mt-5">
                <Button size={"lg"} className="text-md">
                  <PhoneIcon className="w-4 h-4 mr-1" />
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col items-center justify-start min-h-screen w-1/2 pt-20 pr-20 ">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover "
          />
        </div> */}
        </PageWrapper>
      </div>
    </>
  );
}

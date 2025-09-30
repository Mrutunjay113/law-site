import Image from "next/image";
import PageWrapper from "./PageWrapper";

export default function About() {
  return (
    <div className="bg-background h-fit my-10">
      <PageWrapper className="">
        <h1 className="text-center text-primary font-medium text-md">
          About us
        </h1>
        <div className="mt-10 flex md:flex-row flex-col w-full gap-10">
          {" "}
          <Image
            src="/images/about-us.jpg"
            alt="About us"
            width={600}
            height={1000}
            className="rounded-lg md:w-1/2"
          />
          <div className="tracking-wide text-md">
            I'm [Your Full Name], a dedicated legal professional with over [X
            years] of experience providing personalized legal services in areas
            such as [e.g., Civil Law, Criminal Defense, Family Law, or Corporate
            Law]. My mission is to deliver practical, results-driven legal
            advice with honesty, empathy, and integrity. I understand that legal
            matters can be stressful — my goal is to simplify the process and
            advocate for your rights every step of the way. Whether you’re
            facing a legal dispute, need contractual advice, or are navigating a
            complex case, I’m here to offer support, guidance, and
            representation tailored to your unique situation.
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

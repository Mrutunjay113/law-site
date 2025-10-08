import Image from "next/image";
import PageWrapper from "./PageWrapper";

export default function About() {
  return (
    <article className="bg-background h-fit my-10">
      <PageWrapper className="">
        <header>
          <h2 className="text-center text-primary font-medium text-md">
            About us
          </h2>
        </header>
        <div className="mt-10 flex flex-col lg:flex-row w-full gap-10">
          <Image
            src="/images/profile1.png"
            alt="Dinesh Mani Tripathi - Experienced Legal Professional with 25+ years of experience in Civil, Criminal, Family, and Corporate Law"
            width={600}
            height={1000}
            className="rounded-lg w-full lg:w-1/2"
            priority={false}
          />

          <div className="tracking-wide text-sm sm:text-md leading-relaxed">
            <p>
              I'm <strong>Dinesh Mani Tripathi</strong>, a dedicated legal
              professional with over 25 years of experience providing
              personalized legal services in areas such as Civil Law, Criminal
              Defense, Family Law, and Corporate Law. My mission is to deliver
              practical, results-driven legal advice with honesty, empathy, and
              integrity.
            </p>
            <p>
              I understand that legal matters can be stressful — my goal is to
              simplify the process and advocate for your rights every step of
              the way. Whether you're facing a legal dispute, need contractual
              advice, or are navigating a complex case, I'm here to offer
              support, guidance, and representation tailored to your unique
              situation.
            </p>
          </div>
        </div>
      </PageWrapper>
    </article>
  );
}

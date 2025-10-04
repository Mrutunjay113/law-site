import Image from "next/image";
import { BookOpenIcon } from "lucide-react";
import PageWrapper from "./PageWrapper";

const whyChooseUs = [
  {
    icon: <BookOpenIcon className="w-5 h-5" />,
    title: "Proven Legal Expertise",
    description:
      "With years of experience across multiple legal fields, we offer strategic solutions backed by deep knowledge and a successful track record.",
  },
  {
    icon: <BookOpenIcon className="w-5 h-5" />,
    title: "Client-Centered Approach",
    description:
      "We prioritize clear communication, transparency, and personalized attention to ensure every client feels supported and understood.",
  },
  {
    icon: <BookOpenIcon className="w-5 h-5" />,
    title: "Reliable Representation",
    description:
      "Whether inside or outside the courtroom, we stand by our clients with integrity and unwavering commitment to their rights.",
  },
  {
    icon: <BookOpenIcon className="w-5 h-5" />,
    title: "Timely & Effective Solutions",
    description:
      "We understand the urgency of legal matters and work efficiently to provide fast, practical outcomes without compromising quality.",
  },
  {
    icon: <BookOpenIcon className="w-5 h-5" />,
    title: "Ethical & Transparent Practice",
    description:
      "We believe in honest guidance, fair billing, and a transparent process so you always know where your case stands.",
  },
  {
    icon: <BookOpenIcon className="w-5 h-5" />,
    title: "Trusted by Individuals & Businesses",
    description:
      "Our reputation is built on long-term relationships and consistent results for both personal legal matters and corporate clients.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-background h-fit my-10">
      <PageWrapper className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-primary font-medium text-md">
          Why Choose Us
        </h1>
        <div className="flex flex-col lg:flex-row w-full gap-10 mt-10">
          <Image
            src="/images/why-choose-us.jpg"
            alt="Why Choose Us"
            width={500}
            height={500}
            className="rounded-lg w-full lg:w-1/2"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 bg-background/95 border border-border rounded-lg p-4 hover:bg-background"
              >
                <div className="flex flex-col gap-1 items-start">
                  <div className="font-semibold text-lg font-mono">
                    {index + 1}
                  </div>
                  <h2 className="font-medium text-base lg:text-lg">
                    {item.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

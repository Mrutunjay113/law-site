import {
  BookOpenIcon,
  Shield,
  Users,
  Building2,
  Home,
  FileText,
  ArrowRight,
  Scale,
  Gavel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PageWrapper from "./PageWrapper";

const PRACTICE_AREAS = [
  {
    title: "Civil Law",
    description:
      "We provide comprehensive legal support in all matters of civil law, including partition suits, property disputes, recovery suits, and specific relief cases. Our approach focuses on safeguarding your rights and achieving fair resolution—whether through negotiation, mediation, or litigation. We handle every case with precision and strategy to protect your legal and financial interests.",
    icon: Scale,
  },
  {
    title: "Criminal Law",
    description:
      "Our criminal law practice covers a wide range of offenses, including criminal proceedings, cheque bounce cases under the NI Act, and related litigation. We stand by our clients through every stage—from investigation to trial—ensuring fair representation, protection of rights, and pursuit of justice with diligence and integrity.",
    icon: Gavel,
  },
  {
    title: "Family Law",
    description:
      "Family disputes require sensitivity and a balanced approach. We handle cases related to divorce, maintenance, child custody, domestic violence, and other family matters with empathy and professionalism. Our goal is to help clients navigate emotionally charged situations with clarity, respect, and strong legal guidance.",
    icon: Users,
  },
  {
    title: "High Court Original Side",
    description:
      "We assist clients in complex matters before the High Court's Original Side, including will probate, succession certificates, letters of administration, and legal heirship proceedings. Our team ensures that all procedural and documentary requirements are meticulously handled to provide smooth and efficient resolution.",
    icon: Building2,
  },
  {
    title: "Estate Planning",
    description:
      "Proper estate planning is essential to protect your assets and secure your family's future. We offer expert guidance in drafting wills, trusts, and succession planning, ensuring your estate is managed and distributed according to your wishes. Our focus is on minimizing disputes and providing peace of mind through clear, legally sound documentation.",
    icon: FileText,
  },
];

export default function PracticeArea() {
  return (
    <section
      className="py-16 relative min-h-screen bg-background"
      style={{
        backgroundImage: "url('/images/bg-parallax.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Legal Practice Areas"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90" aria-hidden="true"></div>

      <PageWrapper className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-md font-semibold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-white/90">
            We provide comprehensive legal services across multiple practice
            areas, ensuring you receive expert counsel for your specific needs.
          </p>
        </header>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8"
          role="list"
        >
          {PRACTICE_AREAS.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col group backdrop-blur-xs min-h-[200px] p-6 lg:p-10 border border-dashed border-white/30 rounded-lg hover:shadow-lg transition-all duration-300"
              role="listitem"
            >
              <div className="flex flex-col items-center gap-4">
                {item.icon && (
                  <item.icon
                    className="h-8 w-8 sm:h-10 sm:w-10 text-primary shadow-3xl"
                    aria-hidden="true"
                  />
                )}
                <h3 className="font-medium text-lg sm:text-xl lg:text-2xl text-white/90 text-center">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-md text-white/70 text-center">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
}

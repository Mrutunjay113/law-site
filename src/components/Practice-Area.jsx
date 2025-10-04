import {
  BookOpenIcon,
  Shield,
  Users,
  Building2,
  Home,
  FileText,
  ArrowRight,
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
    title: "Personal Injury",
    description:
      "We fight for fair compensation in cases of accidents and negligence. \nFrom car crashes to workplace injuries, we handle it all. \nOur goal is to ease your recovery with trusted legal support. \nYou focus on healing — we’ll handle the rest.",
    icon: Shield,
  },
  {
    title: "Criminal Defense",
    description:
      "Accused of a crime? We protect your rights with strong legal defense. \nEvery case is treated with urgency and precision. \nWe handle everything from minor offenses to serious charges. \nYour future matters — let us help defend it.",
    icon: Shield,
  },
  {
    title: "Family Law",
    description:
      "We guide families through divorce, custody, and support disputes. \nOur approach is respectful, empathetic, and child-focused. \nLegal family matters require clarity and compassion. \nLet us help bring peace of mind to your situation.",
    icon: Users,
  },
  {
    title: "Business Law",
    description:
      "From startups to corporations, we offer strategic legal advice. \nWe assist with contracts, compliance, and risk management. \nFocus on growth while we handle your legal landscape. \nProtect your business with experienced counsel.",
    icon: Building2,
  },
  {
    title: "Real Estate",
    description:
      "We help clients navigate property sales, leases, and disputes. \nAvoid costly mistakes with clear legal guidance. \nWhether buying, selling, or litigating — we’re with you. \nSecure your real estate deals with confidence.",
    icon: Home,
  },
  {
    title: "Estate Planning",
    description:
      "Prepare for the future with wills, trusts, and probate support. \nWe help you protect your assets and loved ones. \nCustomized estate plans that reflect your wishes. \nLeave a legacy that truly matters — we’ll guide you.",
    icon: FileText,
  },
];

export default function PracticeArea() {
  return (
    <section
      className="py-16 relative min-h-screen bg-background "
      style={{
        backgroundImage: "url('/images/bg-parallax.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      <PageWrapper className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-md font-semibold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-white/90">
            We provide comprehensive legal services across multiple practice
            areas, ensuring you receive expert counsel for your specific needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {PRACTICE_AREAS.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col group backdrop-blur-xs min-h-[200px] p-6 lg:p-10 border border-dashed border-white/20 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                {item.icon && (
                  <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary shadow-3xl" />
                )}
                <h2 className="font-medium text-lg sm:text-xl lg:text-2xl text-white/90 text-center">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-md text-white/70 line-clamp-3 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
}

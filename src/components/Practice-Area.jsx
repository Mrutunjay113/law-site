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
    <section className="py-16 bg-background">
      <PageWrapper className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-md font-semibold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-lg max-w-4xl mx-auto">
            We provide comprehensive legal services across multiple practice
            areas, ensuring you receive expert counsel for your specific needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRACTICE_AREAS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col min-h-[200px] gap-2 bg-background/95 border border-border rounded-lg p-4 hover:bg-background"
            >
              <div className="flex  items-center gap-2">
                {item.icon && <item.icon className="h-5 w-5" />}
                <h2 className="font-medium text-lg">{item.title}</h2>
              </div>
              <p className="text-md text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
}

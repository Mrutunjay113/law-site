"use client";

import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import PageWrapper from "./PageWrapper";

const quickLinks = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About Us",
    href: "about",
  },
  {
    name: "Practice Areas",
    href: "practice-areas",
  },
  {
    name: "Contact Us",
    href: "contact",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: "Email",
    href: "mailto:info@lawfirm.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary/5 py-16">
      <PageWrapper className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-muted-foreground">
              We are a team of experienced lawyers dedicated to providing the
              best legal services to our clients.
            </p>
            <div className="flex flex-row gap-2 mt-4">
              {socialLinks.map((link) => (
                <Link
                  className="p-2 bg-background/60 rounded-md hover:bg-background/90 shadow-sm hover:shadow-md transition-all duration-300"
                  href={link.href}
                  key={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold px-4">Quick Links</h3>
            <div className="flex flex-col  items-start">
              {/* show quick links and implement scroll link */}
              {/* <ScrollLink
                to="home"
                smooth={true}
                duration={800}
                offset={-80}
                className={cn(buttonVariants({ variant: "link" }), "")}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={800}
                offset={-80}
                className={buttonVariants({ variant: "link" })}
              >
                About Us
              </ScrollLink>
              <ScrollLink
                to="practice-areas"
                smooth={true}
                duration={800}
                offset={-80}
                className={buttonVariants({ variant: "link" })}
              >
                Practice Areas
              </ScrollLink> */}
              {quickLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.href}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className={buttonVariants({ variant: "link" })}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      </PageWrapper>
    </footer>
  );
}

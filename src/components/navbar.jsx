"use client";

import * as React from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  User,
  Briefcase,
  Phone,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { ThemeToggle } from "./theme-toggle";
import { Link as ScrollLink } from "react-scroll";
import PageWrapper from "./PageWrapper";

const PRACTICE_AREAS = [
  {
    title: "Personal Injury",
    href: "#practice-areas",
    description:
      "Comprehensive legal representation for accident victims and their families.",
  },
  {
    title: "Criminal Defense",
    href: "#practice-areas",
    description:
      "Experienced defense attorneys protecting your rights and freedom.",
  },
  {
    title: "Family Law",
    href: "#practice-areas",
    description:
      "Compassionate guidance through divorce, custody, and family matters.",
  },
  {
    title: "Business Law",
    href: "#practice-areas",
    description: "Strategic legal counsel for businesses of all sizes.",
  },
  {
    title: "Real Estate",
    href: "#practice-areas",
    description: "Expert assistance with property transactions and disputes.",
  },
  {
    title: "Estate Planning",
    href: "#practice-areas",
    description:
      "Protect your legacy with comprehensive estate planning services.",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = React.useState(false);
  const [isMobilePracticeAreasOpen, setIsMobilePracticeAreasOpen] =
    React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background">
      <PageWrapper className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <ScrollLink
              to="home"
              smooth={true}
              duration={800}
              offset={-80}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold text-foreground">
                Law Firm
              </span>
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="home"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
            >
              About
            </ScrollLink>

            {/* Practice Areas Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-foreground transition-colors hover:text-primary focus:outline-none"
                onMouseEnter={() => setIsPracticeAreasOpen(true)}
                onMouseLeave={() => setIsPracticeAreasOpen(false)}
              >
                <span>Practice Areas</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-96 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 transform -translate-y-2",
                  isPracticeAreasOpen && "opacity-100 visible translate-y-0"
                )}
                onMouseEnter={() => setIsPracticeAreasOpen(true)}
                onMouseLeave={() => setIsPracticeAreasOpen(false)}
              >
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {PRACTICE_AREAS.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block p-3 rounded-md hover:bg-accent transition-colors"
                      >
                        <div className="font-medium text-foreground mb-1">
                          {area.title}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {area.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
            >
              Contact
            </ScrollLink>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] ">
                <div className="flex flex-col h-ful w-full">
                  {/* Header */}
                  <div className="flex items-center justify-between py-6 border-b border-border/50">
                    <ScrollLink
                      to="home"
                      smooth={true}
                      duration={800}
                      offset={-80}
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="h-6 w-6 rounded-full bg-primary"></div>
                      <span className="text-lg font-bold text-foreground">
                        Law Firm
                      </span>
                    </ScrollLink>
                  </div>

                  {/* Navigation Items */}
                  <div className="flex-1 py-3 space-y-2 px-4 ">
                    <ScrollLink
                      to="home"
                      smooth={true}
                      duration={800}
                      offset={-80}
                      className="flex items-center px-2 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <Home className="h-5 w-5 mr-3" />
                      Home
                    </ScrollLink>

                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={800}
                      offset={-80}
                      className="flex items-center px-2 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="h-5 w-5 mr-3" />
                      About
                    </ScrollLink>

                    {/* Mobile Practice Areas - Collapsible */}
                    <div className="space-y-2 ">
                      <button
                        onClick={() =>
                          setIsMobilePracticeAreasOpen(
                            !isMobilePracticeAreasOpen
                          )
                        }
                        className="flex items-center justify-between w-full px-2 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center">
                          <Briefcase className="h-5 w-5 mr-3" />
                          Practice Areas
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isMobilePracticeAreasOpen && "rotate-90"
                          )}
                        />
                      </button>

                      {/* Practice Areas Dropdown */}
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300  ease-in-out",
                          isMobilePracticeAreasOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        <ScrollArea className="ml-4 space-y-1 bg-muted/30 rounded-lg p-2 h-[200px]">
                          {PRACTICE_AREAS.map((area) => (
                            <Link
                              key={area.href}
                              href={area.href}
                              className="flex flex-col px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-accent/30 rounded-lg transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobilePracticeAreasOpen(false);
                              }}
                            >
                              <span className="font-medium text-foreground mb-1">
                                {area.title}
                              </span>
                              <span className="text-xs leading-relaxed">
                                {area.description}
                              </span>
                            </Link>
                          ))}
                        </ScrollArea>
                      </div>
                    </div>

                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={800}
                      offset={-80}
                      className="flex items-center px-2 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      Contact
                    </ScrollLink>
                  </div>
                </div>{" "}
                <SheetFooter className="border-t border-border/50 py-4">
                  <div className="px-4 text-xs text-muted-foreground">
                    © 2025 Law Firm. All rights reserved.
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </PageWrapper>
    </nav>
  );
}

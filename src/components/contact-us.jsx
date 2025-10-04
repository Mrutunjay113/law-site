"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  Loader2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sendContactEmail } from "@/action/contact";
import PageWrapper from "./PageWrapper";

const contact_info = [
  {
    title: "Office Address",
    icon: MapPin,
    description: (
      <>
        Address: ACBA 3rd floor, JMFC Court, Andheri(E) Mumbai-400069
        <br /> Address: B303 Versova Neptune chs, 4th cross road lokhand wala,
        Andheri (W), mum-53
      </>
    ),
  },
  {
    title: "Phone Number",
    icon: Phone,
    description: (
      <>
        +91 98200 00000 <br /> +91 98200 00000
      </>
    ),
    msg: "Available between 9:00 AM - 9:00 PM",
  },
  {
    title: "Email Address",
    icon: Mail,
    description: "contact@lawfirm.com",
    msg: "We respond within 24 hours",
  },
  {
    title: "Office Hours",
    icon: Clock,
    description: "Monday - Friday: 9:00 AM - 9:00 PM",
    msg: "Sunday: Closed",
  },
];

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setMessage({ type: "success", text: result.success });
        // Reset form
        document.getElementById("contact-form").reset();
      } else {
        setMessage({ type: "error", text: result.error });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-16 relative "
      style={{
        backgroundImage: "url('/images/contact-us-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <div className="absolute inset-0 bg-black/80 "></div>
      <PageWrapper className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-md font-semibold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white/70">
            Ready to discuss your legal needs? Contact us today for a
            consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                We're here to help with all your legal needs. Reach out to us
                through any of the following channels.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {contact_info.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 shadow-sm gap-4 border border-white/20 rounded-lg p-4 bg-black/40 backdrop-blur-xl"
                >
                  <div className="grid grid-cols-1 items-center gap-4">
                    {item?.icon && (
                      <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    )}
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-md">
                      {item.description}
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      {item?.msg}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <Card className="bg-background/40 backdrop-blur-xl shadow-none border">
              <CardHeader className="">
                <CardTitle className="">Send us a Message</CardTitle>
                <CardDescription className="">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <form
                  id="contact-form"
                  action={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Message Display */}
                  {message.text && (
                    <div
                      className={`p-4 rounded-xl flex items-center space-x-3 ${
                        message.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {message.type === "success" ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      <span className="text-sm font-medium">
                        {message.text}
                      </span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full text-sm sm:text-base"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full text-sm sm:text-base"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number (optional)"
                      className="w-full text-sm sm:text-base"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your legal needs..."
                      required
                      className="min-h-[100px] sm:min-h-[120px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    size="lg"
                    disabled={isSubmitting}
                    className={"w-full"}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2Icon className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}

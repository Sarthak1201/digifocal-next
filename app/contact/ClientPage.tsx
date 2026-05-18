"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // Added for redirect logic
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"; // Added CheckCircle2
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// --- CONFIGURATION ---
const RECRUITER_EMAIL = "alliance@digifocal.in";

export default function Contact() {
  const { toast } = useToast();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Hooks for handling the redirect return
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- LOGIC TO TRIGGER SUCCESS VIEW ON RETURN ---
  useEffect(() => {
    // Check if URL has ?success=true
    if (searchParams.get("success") === "true") {
      setShowSuccessMessage(true);

      // Trigger the toast notification
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24-48 hours.",
        variant: "default",
      });

      // Clear the URL so it doesn't happen again on refresh
      router.replace(pathname);
    }
  }, [searchParams, pathname, router, toast]);

  return (
    <Layout>
      {/* Header / Hero */}
      <section className="section-padding bg-[#624d3b]">
        <div className="enterprise-container">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss how we can help transform your business.
              Our team is ready to understand your challenges and deliver solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* --- Left Column: Contact Info --- */}
            <div>
              <h2 className="text-2xl font-medium text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:contact@digifocal.in"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      alliance@digifocal.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9892571003
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      Thane, Mumbai
                      <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-6 bg-background border border-border">
                <h3 className="font-medium text-foreground mb-3">
                  Business Hours
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Saturday: 9:00 AM - 6:00 PM IST
                  <br />
                  
                </p>
              </div>
            </div>

            {/* --- Right Column: Contact Form --- */}
            <div className="lg:col-span-2">
              <div className="bg-background border border-border p-8 h-full">
                {showSuccessMessage ? (
                  // --- SUCCESS VIEW ---
                  <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] animate-in fade-in duration-500">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-medium text-foreground mb-4">
                      Message Received!
                    </h2>
                    <p className="text-muted-foreground max-w-md text-lg mb-8">
                      Thank you for contacting us. We have received your details and will respond to your inquiry shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setShowSuccessMessage(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  // --- FORM VIEW ---
                  <>
                    <h2 className="text-2xl font-medium text-foreground mb-6">
                      Send Us a Message
                    </h2>

                    <form 
                      action={`https://formsubmit.co/${RECRUITER_EMAIL}`} 
                      method="POST" 
                      className="space-y-6"
                    >
                      {/* FormSubmit Configuration Fields */}
                      <input 
                        type="hidden" 
                        name="_next" 
                        value={`${window.location.origin}${window.location.pathname}?success=true`} 
                      />
                      <input type="hidden" name="_subject" value="New Contact Form Inquiry" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="John"
                            className="bg-background border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Doe"
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="bg-background border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91..."
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company Name"
                          className="bg-background border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject" // FormSubmit uses this inside the email body, distinct from _subject email header
                          required
                          placeholder="Project Inquiry"
                          className="bg-background border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="How can we help you?"
                          className="bg-background border-border resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="enterprise"
                        size="lg"
                        className="w-full md:w-auto"
                      >
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
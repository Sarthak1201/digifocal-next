"use client";
import React from 'react';
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Digifocal IT Solutions</title>
        <meta name="description" content="Privacy Policy and terms of data usage for Digifocal IT Solutions Pvt Ltd." />
      </Helmet>

      {/* Hero Section (Matches Careers Page) */}
      <section className="py-12 bg-[#624d3b]">
        <div className="enterprise-container">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Effective Date: March 12, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section (Dark Theme Card UI) */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="enterprise-container">
          <div className="max-w-4xl mx-auto bg-black border border-white/10 rounded-2xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
            
            <div className="relative z-10 space-y-10 text-gray-300 leading-relaxed">
              
              <p className="text-lg">
                At Digifocal IT Solutions Pvt Ltd ("we," "our," or "us"), accessible from https://digifocal.in, the privacy of our visitors is one of our main priorities. This Privacy Policy document outlines the types of information that is collected and recorded by Digifocal and how we use it.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3">
                  1. Information We Collect
                </h2>
                <p>
                  We collect information that you voluntarily provide to us when you apply for jobs via our careers portal, contact us for software development services, or express an interest in obtaining information about us or our products and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3">
                  2. Log Files
                </h2>
                <p>
                  Digifocal follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3">
                  3. Cookies and Web Beacons
                </h2>
                <p>
                  Like any other website, Digifocal uses "cookies" to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3">
                  4. Google DoubleClick DART Cookie
                </h2>
                <p>
                  Google is one of a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.digifocal.in and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at:
                </p>
                <a 
                  href="https://policies.google.com/technologies/ads" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-block mt-3 text-[#AB784A] hover:text-[#976436] transition-colors hover:underline break-all font-medium"
                >
                  https://policies.google.com/technologies/ads
                </a>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3">
                  5. Third-Party Privacy Policies
                </h2>
                <p>
                  Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on Digifocal. They automatically receive your IP address when this occurs. Digifocal has no access to or control over these cookies used by third-party advertisers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3">
                  6. Consent
                </h2>
                <p>
                  By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3">
                  7. Contact Us
                </h2>
                <p>
                  If you have additional questions or require more information, contact us at{' '}
                  <a href="mailto:info@digifocal.in" className="text-[#AB784A] hover:text-[#976436] transition-colors hover:underline font-medium">
                    info@digifocal.in
                  </a>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X, TrendingUp, Users, Globe, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "Excellence",
    description:
      "We pursue excellence in everything we do, delivering solutions that exceed expectations.",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty, building trust through ethical business practices.",
  },
  {
    title: "Innovation",
    description:
      "We embrace change and continuously seek new ways to solve complex challenges.",
  },
  {
    title: "Partnership",
    description:
      "We believe in long-term relationships, working as an extension of our clients' teams.",
  },
];

// Data for the Founders/Leadership section
const leaders = [
  {
    id: 1,
    name: "Mr Alhad Nimbalkar",
    role: "Founder",
    image: "AlhadNimbalkar.jpeg",
    modalImage: "AlhadNimbalkar1.jpeg",
    bio: (
      <>
        <p className="mb-4">
          DIGIFOCAL was founded by Alhad Nimbalkar who has worked for 25+ years in multiple MNCs across serving more than 80+ clients across the globe and various industry verticals – Manufacturing, FMCG, Automotive, and Technology. He has helped clients in providing transformational services through IT and ITES with his excellent teams in multiple companies.
        </p>
        <p>
          He has served 10 years in Godrej, Accenture, HCL Technologies, NSEIT and served various positions as GM, VP, Managing Director. He says "It's payback time for me to industries and help them find right talent as I know talent builds organizations and organizations build healthy nation".
        </p>
      </>
    )
  },
  {
    id: 2,
    name: "Mrs Dipti Nimbalkar",
    role: "Co-Founder",
    image: "DiptiNimbalkar.jpg",
    modalImage: null, // Fallback to main image if null
    bio: (
      <>
        <p className="mb-4">
        DIGIFOCAL is co- founded by Dipti Nimbalkar , a Pharma graduate from Mumbai University with an enriched experience of over two decades in Pharmaceutical Marketing in leading organisations like UCB Pharma, Kopran, Glenmark and USV.
        </p>
        <p>
        She has worked over 25 years in Pharmaceutical Marketing with a rich understanding of patient journey across various chronic diseases, the treatment modules, the challenges and critical gaps particularly in chronic diseases and mental illnesses.
        </p>
      </>
    )
  }
];

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedLeader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedLeader]);

  // Preload modal images on component mount to eliminate loading lag
  useEffect(() => {
    leaders.forEach((leader) => {
      const img = new Image();
      img.src = leader.modalImage || leader.image;
    });
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-[#624d3b]">
        <div className="enterprise-container">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6">About Digifocal</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A multi-functional, cross-industry technology solutions firm,
              driving digital transformation and business growth since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership / Founders Section */}
      <section className="section-padding bg-black">
        <div className="enterprise-container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-muted-foreground text-lg mb-2">
              Championing the next generation of Recruitment Specialists!
            </p>
            <p className="text-sm font-semibold tracking-widest text-[#bf9b30] uppercase">
              Industry Veterans, with the flair for head hunting!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                onClick={() => setSelectedLeader(leader)}
                className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/10 bg-[#1A1A1A] hover:bg-[#624d3b]"
              >
                {/* Card Content */}
                <div className="p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-[#bf9b30]/20 shadow-md">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-gray-300 font-medium text-lg mb-6">
                    {leader.role}
                  </p>
                  
                  {/* "Click here" CTA added below */}
                  <div className="flex items-center gap-2 text-[#bf9b30] font-semibold text-sm transition-transform duration-300 group-hover:translate-x-2">
                    <span>Click to view profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-black">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Digifocal IT Solutions is headquartered in Thane, Maharashtra, with a Pan-India
                presence. We are a multi-functional, multi-faculty, cross-industry technology
                solutions firm that has evolved from our roots in talent acquisition to become
                a comprehensive IT services partner.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of experienced professionals brings deep domain expertise across
                software development, automation, technology consulting, and recruitment
                services. We work with enterprises, startups, and SMEs to deliver solutions
                that create measurable business value.
              </p>
            </div>

            {/* UPDATED STATS SECTION */}
            <div className="bg-card p-8 border border-border rounded-xl">
              <div className="grid grid-cols-2 gap-8">
                {/* Stat 1: Projects Delivered */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#1A1A1A] border border-white/5 rounded-md flex items-center justify-center mb-4">
                    <TrendingUp className="text-[#bf9b30] w-6 h-6" />
                  </div>
                  <div className="text-4xl font-medium text-white mb-2">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Delivered
                  </div>
                </div>
                
                {/* Stat 2: Clients Served */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#1A1A1A] border border-white/5 rounded-md flex items-center justify-center mb-4">
                    <Users className="text-[#bf9b30] w-6 h-6" />
                  </div>
                  <div className="text-4xl font-medium text-white mb-2">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Clients Served
                  </div>
                </div>
                
                {/* Stat 3: Years Experience */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#1A1A1A] border border-white/5 rounded-md flex items-center justify-center mb-4">
                    <Globe className="text-[#bf9b30] w-6 h-6" />
                  </div>
                  <div className="text-4xl font-medium text-white mb-2">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                
                {/* Stat 4: Industry Partners */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#1A1A1A] border border-white/5 rounded-md flex items-center justify-center mb-4">
                    <Award className="text-[#bf9b30] w-6 h-6" />
                  </div>
                  <div className="text-4xl font-medium text-white mb-2">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Industry Partners
                  </div>
                </div>
              </div>
            </div>
            {/* END UPDATED STATS SECTION */}
            
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-black">
        <div className="enterprise-container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide our work and define our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-card border border-border"
              >
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          RESPONSIVE MODAL POPUP (Optimized for Speed)
          ======================================== */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-100">

          {/* Modal Container: Removed mobile zoom-in to prevent lag */}
          <div className="relative w-full h-full md:h-auto md:max-w-4xl bg-white md:rounded-lg shadow-2xl overflow-hidden animate-in md:zoom-in-95 duration-100">

            {/* -------------------------------------------
                MOBILE LAYOUT
                ------------------------------------------- */}
            <div className="md:hidden h-full flex flex-col bg-white relative">

              {/* Mobile Close Button */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white text-black rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 active:scale-95 transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto flex-1 overscroll-contain">
                <div className="w-full relative">
                  <img
                    src={selectedLeader.modalImage || selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-auto object-cover block" 
                    loading="eager"
                  />
                </div>

                {/* Content Section */}
                <div className="bg-white px-6 py-8 relative -mt-6 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                  <div className="relative pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-[#bf9b30] font-semibold text-sm mb-4 uppercase tracking-wide">
                      {selectedLeader.role}
                    </p>
                    <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                      {selectedLeader.bio}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------
                DESKTOP LAYOUT
                ------------------------------------------- */}
            <div className="hidden md:grid md:grid-cols-3 h-full">
              {/* Desktop Close Button */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Side */}
              <div className="bg-gray-100 p-6 flex items-center justify-center">
                <div className="relative w-full md:h-full max-h-[400px] overflow-hidden rounded-md">
                   <img
                    src={selectedLeader.modalImage || selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="col-span-2 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedLeader.name}
                </h3>
                <p className="text-[#bf9b30] font-semibold text-lg mb-6 uppercase tracking-wide">
                  {selectedLeader.role}
                </p>
                <div className="text-gray-600 leading-relaxed text-base space-y-4">
                  {selectedLeader.bio}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </Layout>
  );
}
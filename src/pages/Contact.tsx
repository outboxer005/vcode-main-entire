import React from "react";
import {
  Code2,
  Gamepad2,
  Trophy,
  Music,
  BookOpen,
} from "lucide-react";

interface Volunteer {
  name: string;
  role: string;
  phone: string;
}

interface EventSection {
  name: string;
  icon: React.ReactNode;
  volunteers: Volunteer[];
  color: string;
}

function Contact() {
  const eventSections: EventSection[] = [
    {
      name: "E-Sports Arena",
      icon: <Gamepad2 className="w-8 h-8 text-white" />,
      color: "from-violet-500 to-purple-600",
      volunteers: [
        {
          name: "AV.Sathwik Kumar",
          role: "Core Organizer",
          phone: "9908903043",
        },
        {
          name: "K.Ananya",
          role: "Core Organizer",
          phone: "7774024436",
        },
      ],
    },
    {
      name: "Sports Events",
      icon: <Trophy className="w-8 h-8 text-white" />,
      color: "from-pink-500 to-rose-600",
      volunteers: [
        {
          name: "P.sangeetha",
          role: "Core Organizer",
          phone: "7842735151",
        },
        {
          name: "M. Kavya Sri",
          role: "Core Organizer",
          phone: "7075472702",
        },
      ],
    },
    {
      name: "Cultural Events",
      icon: <Music className="w-8 h-8 text-white" />,
      color: "from-yellow-400 to-orange-500",
      volunteers: [
        {
          name: "CH.Aparna",
          role: "Core Organizer",
          phone: "8523813227",
        },
        {
          name: "A.Shanmukha pavan",
          role: "Core Organizer",
          phone: "9849980887",
        },
      ],
    },
    {
      name: "Literature Events",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: "from-emerald-400 to-teal-500",
      volunteers: [
        {
          name: "Gouse Baji Shaik",
          role: "Core Organizer",
          phone: "8143383228",
        },
        {
          name: "V.Sri Teja",
          role: "Core Organizer",
          phone: "9618029957",
        },
      ],
    },
    {
      name: "Technical Events",
      icon: <Code2 className="w-8 h-8 text-white" />,
      color: "from-cyan-500 to-blue-600",
      volunteers: [
        {
          name: "Goli Naresh Reddy",
          role: "Core Organizer",
          phone: "7093976017",
        },
        {
          name: "Giri Nihitha",
          role: "Core Organizer",
          phone: "6302768819",
        },
        {
          name: "Lokya Lochana Pothuru",
          role: "Core Organizer",
          phone: "7729961222",
        },
        {
          name: "B. Gnana Sri Venkata Sai",
          role: "Core Organizer",
          phone: "8520062068",
        },
        {
          name: "Suma Likhitha",
          role: "Core Organizer",
          phone: "6281531343",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f43f5e] bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto px-4">
            Meet Our Dedicated Team Making VCODE 2026 Happen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {eventSections.map((section, index) => (
            <div
              key={section.name}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-fadeInUp ${section.name === "Technical Events" ? "lg:col-span-2" : ""
                }`}
              style={{ opacity: 0, animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative bg-[var(--card)]/50 backdrop-blur-md border border-white/10 group-hover:border-white/20 rounded-2xl p-6 md:p-8 h-full flex flex-col shadow-xl transition-all duration-500">
                <div className="flex flex-col items-center mb-8">
                  <div className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${section.color} mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                    {section.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-white text-center">
                    {section.name}
                  </h2>
                </div>

                <div className={`grid grid-cols-1 gap-4 flex-1 ${section.name === "Technical Events" ? "sm:grid-cols-2 md:grid-cols-3" : "sm:grid-cols-2"
                  }`}>
                  {section.volunteers.map((volunteer) => (
                    <div
                      key={volunteer.name}
                      className="bg-black/40 border border-white/5 rounded-xl p-4 hover:border-white/20 hover:bg-black/60 transition-all duration-300 flex flex-col justify-between"
                    >
                      <h3 className="font-bold text-lg text-white mb-1">
                        {volunteer.name}
                      </h3>
                      <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                        {volunteer.role}
                      </p>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-base text-white/90 font-mono tracking-wide flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full border border-white/30 bg-white/20"></span>
                          +91 {volunteer.phone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;

import Main from "@/components/Main";
import PhotoGallery from "@/components/PhotoGallery";
import { Link } from "react-router-dom";
import React from "react";
import {
  Type,
  ImageIcon,
  Bug,
  Code,
  BookOpen,
  Cpu,
  Search,
  Crosshair, Gamepad2, Trophy, Rocket,
  Dumbbell, Timer, CircleDot,
  Mic, Drama, Palette, Sparkles,
  PenTool, Keyboard, Braces, BrainCircuit, Video
} from "lucide-react";

// Import event images
import typingTestImg from "@/assets/TypingChallenge.png";
import promptMasterImg from "@/assets/PropmtMaster.png";
import debuggingDefendImg from "@/assets/Degugging&Defend.png";
import codingContestImg from "@/assets/Coding Contest.png";
import technicalQuizImg from "@/assets/Technical Quiz.png";
import hackathonImg from "@/assets/Hackathon.png";
import codeHuntImg from "@/assets/Code Hunt.png";
import videoPresentationImg from "@/assets/Video Presentation.png";

const eventSections = [
  {
    title: "Technical Events",
    subtitle: "Code · Debug · Innovate",
    color: "#06b6d4",
    events: [
      {
        title: "Typing Speed Test",
        label: "Speed Challenge",
        date: "Open now",
        description: "Participants can attempt a 60-second typing test multiple times within 10 minutes. The highest WPM score will be considered as the final result.",
        icon: Keyboard,
        registerUrl: "/events",
        registrationOpen: true,
      },
      {
        title: "Prompt Master",
        label: "AI Challenge",
        date: "Coming Soon",
        description: "Based on a given image, students must recreate a similar output using AI tools. Accuracy of the generated image will be evaluated.",
        icon: Cpu,
        registerUrl: "/events",
        registrationOpen: false,
      },
      {
        title: "Debugging & Defend",
        label: "Team of 3",
        date: "Open now",
        description: "Participants will receive HTML, CSS, and JavaScript files containing bugs. They must identify and fix errors to make the project work.",
        icon: Bug,
        registerUrl: "/events",
        registrationOpen: true,
      },
      {
        title: "Coding Contest",
        label: "Individuals",
        date: "Open now",
        description: "Students will solve coding problems within a fixed time using languages like C, C++, Python, Java, or JavaScript.",
        icon: Braces,
        registerUrl: "/events",
        registrationOpen: true,
      },
      {
        title: "Technical Quiz",
        label: "Team of 4",
        date: "Open now",
        description: "MCQ-based quiz covering Operating Systems, DBMS, OOPS, Algorithms, and Programming concepts.",
        icon: BrainCircuit,
        registerUrl: "/events",
        registrationOpen: true,
      },
      {
        title: "Hackathon",
        label: "Team Event",
        date: "Coming Soon",
        description: "Participants will solve a problem statement based on different web-based technologies.",
        icon: Code,
        registerUrl: "/events",
        registrationOpen: false,
      },
      {
        title: "Code Hunt",
        label: "Team of 4",
        date: "Open now",
        description: "Teams will follow clues step-by-step to find answers. The team that successfully completes all levels wins.",
        icon: Search,
        registerUrl: "/events",
        registrationOpen: true,
      },
      {
        title: "Video Presentation",
        label: "Visual Showcase",
        date: "Coming Soon",
        description: "Participants will present short videos based on themes such as Quantum Computing, Cybersecurity in IoT, Machine Learning, etc.",
        icon: Video,
        registerUrl: "/events",
        registrationOpen: false,
      },
    ]
  },
  {
    title: "E-Sports Arena",
    subtitle: "Game On · Compete · Conquer",
    color: "#8b5cf6",
    events: [
      { title: "Valorant", label: "Team", date: "Coming Soon", description: "A team-based tactical shooting tournament where teams compete using strategy, coordination, and gameplay skills.", icon: Crosshair, registerUrl: "/events", registrationOpen: false },
      { title: "Counter-Strike", label: "Team", date: "Coming Soon", description: "A competitive multiplayer shooting game focused on teamwork, planning, and precision.", icon: Crosshair, registerUrl: "/events", registrationOpen: false },
      { title: "E-Football", label: "Solo", date: "Coming Soon", description: "Players compete in virtual football matches to showcase their gaming and strategic skills.", icon: Trophy, registerUrl: "/events", registrationOpen: false },
      { title: "Smash Karts", label: "Multiplayer", date: "Coming Soon", description: "A fun multiplayer kart battle game where players compete using racing and combat abilities.", icon: Gamepad2, registerUrl: "/events", registrationOpen: false },
      { title: "Subway Surfers", label: "Solo", date: "Coming Soon", description: "An individual challenge where the participant with the highest score wins.", icon: Rocket, registerUrl: "/events", registrationOpen: false },
    ]
  },
  {
    title: "Sports Events",
    subtitle: "Strength · Speed · Spirit",
    color: "#ec4899",
    events: [
      { title: "Team Sports", icon: Dumbbell, description: "Cricket, Kabaddi, Kho-Kho, Throw Ball, Basketball, Football, Hockey, Volleyball", label: "Team", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Indoor Games", icon: CircleDot, description: "Chess, Carroms, Tennikoit, Table Tennis", label: "Individual/Team", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Athletics", icon: Timer, description: "100m Race, 400m Race, 4×100m Relay, Shot Put, Long Jump", label: "Individual/Relay", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
    ]
  },
  {
    title: "Cultural Events",
    subtitle: "Music · Dance · Art",
    color: "#eab308",
    events: [
      { title: "Singing Idol", icon: Mic, description: "Solo singing performance where participants showcase their vocal talent.", label: "Solo", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Singing Jodi", icon: Mic, description: "Duet singing competition performed by pairs.", label: "Duet", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Solo Dance", icon: Sparkles, description: "Individual dance performance in any style.", label: "Solo", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Duo Dance", icon: Sparkles, description: "Dance performance by a pair showcasing coordination and creativity.", label: "Duet", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Dumb Charades", icon: Drama, description: "Teams guess words or phrases through actions without speaking.", label: "Team", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Dialogue Dhamaka", icon: Drama, description: "Participants perform famous or creative dialogues with expression and impact.", label: "Solo", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Theme Painting", icon: Palette, description: "Participants create artwork based on a given theme.", label: "Solo", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Pencil Sketching", icon: Palette, description: "Artistic sketches created using pencil techniques.", label: "Solo", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Mehendi", icon: Palette, description: "Creative henna designs showcasing artistic skills.", label: "Solo", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
    ]
  },
  {
    title: "Literature Events",
    subtitle: "Write · Speak · Discover",
    color: "#10b981",
    events: [
      { title: "Spot Creative Writing", icon: PenTool, description: "Participants will write creatively on a topic given on the spot, testing imagination and writing skills.", label: "Solo", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Storytelling", icon: BookOpen, description: "Participants will create and present a story based on the given words, showcasing creativity and narration skills.", label: "Solo", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
      { title: "Word Quest", icon: Search, description: "A fun language-based competition including simple quizzes, anagrams, riddles, and word puzzles to test vocabulary and thinking ability.", label: "Solo", date: "Coming Soon", registerUrl: "/events", registrationOpen: false },
    ]
  }
];

const Home = (): React.ReactElement => {
  return (
    <>
      <Main />

      {eventSections.map((section, sectionIdx) => (
        <section key={section.title} className={`py-12 md:py-16 px-4 ${sectionIdx % 2 === 0 ? 'bg-[var(--background)]' : 'bg-[var(--card)]/30'}`}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-center mb-3" style={{ color: section.color }}>
              {section.subtitle}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-12">
              {section.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              {section.events.map((event: any, index: number) => {
                const Icon = event.icon;
                return (
                  <div
                    key={event.title}
                    className="group flex flex-col w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] xl:w-[calc(25%-2rem)] max-w-sm rounded-2xl border border-white/10 bg-[var(--card)]/70 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                    style={{
                      opacity: 0,
                      animationDelay: `${index * 0.06}s`,
                      animationFillMode: 'forwards'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${section.color}66`;
                      e.currentTarget.style.boxShadow = `0 0 40px -10px ${section.color}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="relative h-48 overflow-hidden bg-[var(--card)] shrink-0">
                      <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${section.color}33 0%, rgba(0,0,0,0) 100%)` }}>
                        <Icon className="w-20 h-20" style={{ color: `${section.color}66` }} />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm">
                          <Icon className="w-5 h-5" style={{ color: section.color }} />
                        </span>
                        <span className="px-3 py-1 rounded-md bg-white/10 text-xs font-medium uppercase tracking-wider text-white/90">
                          {event.label}
                        </span>
                      </div>
                      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-[0.25em]" style={{ color: section.color }}>
                        {event.date}
                      </p>
                    </div>
                    <div className="p-5 flex flex-col items-center text-center flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {event.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-3 mb-4 flex-grow">
                        {event.description}
                      </p>
                      {/* No detail button as requested */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Home;

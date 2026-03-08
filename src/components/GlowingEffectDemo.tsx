import {
  BookOpen,
  Code,
  Bug,
  ImageIcon,
  Search,
  Cpu,
  Type,
  Crosshair, Gamepad2, Trophy, Rocket,
  Dumbbell, Timer, CircleDot,
  Mic, Drama, Palette, Sparkles,
  PenTool, Keyboard, Braces, BrainCircuit, FileImage,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import HeaderButton from "./HeaderButton";
import { useState } from "react";
import InfoModal from "./InfoModal";
import { Link } from "react-router-dom";

// Import event images
import typingTestImg from "@/assets/TypingChallenge.png";
import promptMasterImg from "@/assets/PropmtMaster.png";
import debuggingDefendImg from "@/assets/Degugging&Defend.png";
import codingContestImg from "@/assets/Coding Contest.png";
import technicalQuizImg from "@/assets/Technical Quiz.png";
import hackathonImg from "@/assets/Hackathon.png";
import codeHuntImg from "@/assets/Code Hunt.png";
import posterPresentationImg from "@/assets/Poster Presentation.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const eventDetails: Record<string, any> = {
  "Typing Speed Test": { Description: " Participants attempt multiple 60-second typing tests within 10 minutes, and the highest WPM achieved is considered as the final score", Rounds: "2", Venue: "To be announced shortly", Payment: "Mandatory" },
  "Prompt Master": { Description: "Based on a given image, students must generate a similar output using various AI tools. Accurate images will be considered.", "Team Size": "3 Members", Rounds: "2", Venue: "To be announced shortly", Payment: "Mandatory" },
  "Debugging & Defend": { Description: "Participants fix bugs in given HTML, CSS, and JavaScript files to make the project work as per the required features", "Team Size": "3 Members", Rounds: "2", Venue: "To be announced shortly", Payment: "Mandatory" },
  "Coding Contest": { Description: "Crafting logic, solving problems, creating possibilities!", "Team Size": "1", Levels: "2", Venue: "To be announced shortly", "Allowed Languages": "C, C++, Java, Python", Payment: "Mandatory" },
  "Technical Quiz": { Description: "A concept-based quiz covering OS, DBMS, OOPS, Algorithms, and Programming.", "Team Size": "4", Levels: "2", Venue: "To be announced shortly", Topics: "OS, DBMS, Data Structures, Code Snippets", Payment: "Mandatory" },
  "Poster Presentation": { Description: "Innovative Ideas. Creative Design. Impactful Solutions. Participants present a technical topic from CSE themes through an A4 hard copy poster.", "Team Size": "2", Levels: "To be announced shortly", Venue: "To be announced shortly", "Submission Format": "Hard Copy (A4)", Payment: "Mandatory" },
  Hackathon: { Description: "Innovate, collaborate, create groundbreaking solutions!", "Team Size": "3rd Years – 3 Members, 2nd Years – 2 Members (Mandatory)", Levels: "To be announced shortly", Venue: "To be announced shortly", Duration: "To be announced shortly", Domain: "Web", Theme: "To be announced shortly", Payment: "Mandatory" },
  "Code Hunt": { Description: "Participants follow clue-based paths and solve logical challenges to reach the final answer", "Team Size": "4", Levels: "6-7", Venue: "To be announced shortly", Payment: "Mandatory" },
};

const categorizedEvents = [
  {
    category: "Technical Events",
    subtitle: "Code · Debug · Innovate",
    color: "from-[#06b6d4] to-[#0891b2]",
    registrationUrl: "/register/technical",
    items: [
      { icon: <Cpu className="h-6 w-6 text-rose-400" />, title: "Hackathon", label: "Team Event", description: "Innovate, collaborate, create groundbreaking solutions!", url: "/register/hackathon", registrationOpen: false },
      { icon: <Keyboard className="h-6 w-6 text-lime-400" />, title: "Typing Speed Test", label: "Speed Challenge", description: "Participants can attempt a 60-second typing test multiple times within 10 minutes.", url: "/events", registrationOpen: true },
      { icon: <ImageIcon className="h-6 w-6 text-cyan-400" />, title: "Prompt Master", label: "AI Challenge", description: "Given an image, recreate it using AI tools. Accuracy wins.", url: "/events", registrationOpen: false },
      { icon: <Bug className="h-6 w-6 text-amber-400" />, title: "Debugging & Defend", label: "Team of 3", description: "Fix bugs in HTML, CSS & JS. Make the project work as specified.", url: "/events", registrationOpen: true },
      { icon: <BrainCircuit className="h-6 w-6 text-violet-400" />, title: "Technical Quiz", label: "Team of 4", description: "MCQs on OS, DBMS, OOPs, Algorithms & Programming. Team of 4.", url: "/events", registrationOpen: true },
      { icon: <Braces className="h-6 w-6 text-emerald-400" />, title: "Coding Contest", label: "Individuals", description: "Solve problems in C, C++, Python, Java, or JS. Year-wise individuals.", url: "/events", registrationOpen: true },
      { icon: <FileImage className="h-6 w-6 text-fuchsia-400" />, title: "Poster Presentation", label: "Visual Showcase", description: "Design a technical poster that clearly communicates your idea or solution.", url: "/events", registrationOpen: false },
      { icon: <Search className="h-6 w-6 text-sky-400" />, title: "Code Hunt", label: "Team of 4", description: "Follow clues, crack levels. VCODE Day morning—team of 4.", url: "/events", registrationOpen: true },
    ]
  },
  {
    category: "E-Sports Arena",
    subtitle: "Game On · Compete · Conquer",
    color: "from-[#8b5cf6] to-[#7c3aed]",
    registrationUrl: "/register/esports",
    items: [
      { icon: <Crosshair className="h-6 w-6 text-rose-500" />, title: "Valorant", label: "Team", description: "A team-based tactical shooting tournament.", url: "/events", registrationOpen: false },
      { icon: <Crosshair className="h-6 w-6 text-red-500" />, title: "Counter-Strike", label: "Team", description: "A competitive multiplayer shooting game.", url: "/events", registrationOpen: false },
      { icon: <Trophy className="h-6 w-6 text-yellow-500" />, title: "E-Football", label: "Solo", description: "Virtual football matches to showcase skills.", url: "/events", registrationOpen: false },
      { icon: <Gamepad2 className="h-6 w-6 text-indigo-500" />, title: "Smash Karts", label: "Multiplayer", description: "Multiplayer kart battle game.", url: "/events", registrationOpen: false },
      { icon: <Rocket className="h-6 w-6 text-orange-500" />, title: "Subway Surfers", label: "Solo", description: "Individual challenge for the highest score.", url: "/events", registrationOpen: false },
    ]
  },
  {
    category: "Sports Events",
    subtitle: "Strength · Speed · Spirit",
    color: "from-[#ec4899] to-[#be185d]",
    registrationUrl: "/register/sports",
    items: [
      { icon: <Dumbbell className="h-6 w-6 text-pink-500" />, title: "Team Sports", label: "Team", description: "Cricket, Kabaddi, Kho-Kho, Throw Ball, Basketball, Football, Hockey, Volleyball", url: "/events", registrationOpen: false },
      { icon: <CircleDot className="h-6 w-6 text-blue-500" />, title: "Indoor Games", label: "Individual/Team", description: "Chess, Carroms, Tennikoit, Table Tennis", url: "/events", registrationOpen: false },
      { icon: <Timer className="h-6 w-6 text-green-500" />, title: "Athletics", label: "Individual/Relay", description: "100m Race, 400m Race, 4×100m Relay, Shot Put, Long Jump", url: "/events", registrationOpen: false },
    ]
  },
  {
    category: "Cultural Events",
    subtitle: "Music · Dance · Art",
    color: "from-[#eab308] to-[#ca8a04]",
    registrationUrl: "/register/cultural",
    items: [
      { icon: <Mic className="h-6 w-6 text-yellow-400" />, title: "Singing Idol", label: "Solo", description: "Solo singing performance.", url: "/events", registrationOpen: false },
      { icon: <Mic className="h-6 w-6 text-yellow-500" />, title: "Singing Jodi", label: "Duet", description: "Duet singing competition.", url: "/events", registrationOpen: false },
      { icon: <Sparkles className="h-6 w-6 text-cyan-400" />, title: "Solo Dance", label: "Solo", description: "Individual dance performance.", url: "/events", registrationOpen: false },
      { icon: <Sparkles className="h-6 w-6 text-cyan-500" />, title: "Duo Dance", label: "Duet", description: "Dance performance by a pair.", url: "/events", registrationOpen: false },
      { icon: <Drama className="h-6 w-6 text-purple-400" />, title: "Dumb Charades", label: "Team", description: "Act without speaking.", url: "/events", registrationOpen: false },
      { icon: <Drama className="h-6 w-6 text-purple-500" />, title: "Dialogue Dhamaka", label: "Solo", description: "Perform creative dialogues.", url: "/events", registrationOpen: false },
      { icon: <Palette className="h-6 w-6 text-orange-400" />, title: "Theme Painting", label: "Solo", description: "Artwork based on a theme.", url: "/events", registrationOpen: false },
      { icon: <Palette className="h-6 w-6 text-orange-500" />, title: "Pencil Sketching", label: "Solo", description: "Artistic sketches.", url: "/events", registrationOpen: false },
      { icon: <Palette className="h-6 w-6 text-red-400" />, title: "Mehendi", label: "Solo", description: "Creative henna designs.", url: "/events", registrationOpen: false },
    ]
  },
  {
    category: "Literature Events",
    subtitle: "Write · Speak · Discover",
    color: "from-[#10b981] to-[#047857]",
    registrationUrl: "/register/literature",
    items: [
      { icon: <PenTool className="h-6 w-6 text-emerald-500" />, title: "Spot Creative Writing", label: "Solo", description: "Write creatively on a spot topic.", url: "/events", registrationOpen: false },
      { icon: <BookOpen className="h-6 w-6 text-emerald-600" />, title: "Storytelling", label: "Solo", description: "Create and present a story.", url: "/events", registrationOpen: false },
      { icon: <Search className="h-6 w-6 text-emerald-400" />, title: "Word Quest", label: "Solo", description: "Quizzes, anagrams, riddles.", url: "/events", registrationOpen: false },
    ]
  }
];

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  label?: string;
  description: React.ReactNode;
  url: string;
  categoryColor: string;
  registrationOpen?: boolean;
}

const GridItem = ({
  icon,
  title,
  label,
  description,
  url,
  categoryColor,
  registrationOpen,
}: GridItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`min-h-[14rem] list-none`}
      >
        <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-2xl md:p-3 bg-[var(--card)]/50 backdrop-blur-sm group hover:border-[#06b6d4]/40 transition-all duration-300">
          <GlowingEffect
            spread={100}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-xl border border-white/10 group-hover:border-white/30 p-6 md:p-4 bg-[var(--card)]/80 transition-all duration-300">
            <div className="relative flex flex-1 flex-col justify-between gap-2">
              <div className="flex items-center justify-between">
                <div
                  className={`w-fit rounded-xl border border-white/10 bg-gradient-to-br ${categoryColor} p-2.5 group-hover:border-white/40 transition-all duration-300`}
                >
                  {icon}
                </div>
                {label && (
                  <span className="px-3 py-1 rounded-md bg-white/10 text-[0.65rem] font-bold uppercase tracking-wider text-white/90">
                    {label}
                  </span>
                )}
              </div>
              <div className="space-y-2 flex-1 mt-2">
                <div className="flex items-center gap-2 pt-0.5">
                  <h3 className="text-lg md:text-xl font-bold text-white transition-colors">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                  {description}
                </p>
              </div>
              {/* No detail button as requested */}
            </div>
          </div>
        </div>
      </div>

      <InfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={
          <>
            <p className="text-white/80">
              {eventDetails[title]?.Description ?? description}
            </p>
            <ul className="mt-3 text-sm text-white/60 space-y-2">
              {Object.entries(eventDetails[title] || {}).map(([key, value]) =>
                key === "Description" ? null : (
                  <li key={key} className="flex justify-between items-start">
                    <strong className="text-[#06b6d4]">{key}:</strong>
                    <span className="text-right">{String(value)}</span>
                  </li>
                ),
              )}
            </ul>
          </>
        }
        img={undefined}
      />
    </>
  );
};

export function GlowingEffectDemo() {
  return (
    <div className="pb-20 space-y-16 lg:space-y-24">
      {categorizedEvents.map((section, idx) => (
        <div key={section.category} className="space-y-12 animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
          <div className="text-center md:text-left pl-2">
            <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent inline-block mb-2`}>
              {section.category}
            </h2>
            <p className="font-mono text-sm tracking-widest text-white/50 uppercase">
              {section.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {section.items.map((item) => (
              <GridItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                label={item.label}
                description={item.description}
                url={item.url}
                categoryColor={section.color}
                registrationOpen={item.registrationOpen}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

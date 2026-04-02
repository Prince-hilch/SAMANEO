import React, { useState, useEffect, useRef, forwardRef, useMemo } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'motion/react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useNavigate,
  useLocation
} from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  LayoutDashboard, 
  Sprout, 
  Truck, 
  Store, 
  Bell, 
  Menu, 
  User, 
  Settings, 
  X,
  Droplets,
  ThermometerSun,
  Wind,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Activity,
  CheckCircle2,
  Info,
  BarChart2,
  Snowflake,
  Package,
  MapPin,
  Clock,
  ChevronRight,
  Search,
  Filter,
  Star,
  ShieldCheck,
  Percent,
  ShoppingBag,
  Leaf,
  Recycle,
  Bot,
  Smartphone,
  Check
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(ScrollTrigger);

// --- Landing Page Components ---

const RevealText = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;
    
    gsap.fromTo(textRef.current, 
      { y: '100%' },
      { 
        y: '0%', 
        duration: 1.2, 
        ease: "power4.out",
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        }
      }
    );
  }, [delay]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div ref={textRef}>
        {children}
      </div>
    </div>
  );
};

const SystemTerminal = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const logMessages = [
    "Initializing KiloBot v2.4...",
    "Connecting to Plot 42 sensors...",
    "Soil moisture: 42% (Optimal)",
    "Nutrient analysis: N-45, P-30, K-60",
    "Predicting yield surplus: +15%",
    "Scanning market demand in Mumbai...",
    "Veriator unit #882 assigned to route...",
    "Cold chain integrity: Verified",
    "Smart contract executed: 0x8f2...3a1",
    "Optimizing harvest window: 72h remaining"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < logMessages.length) {
        setLogs(prev => [...prev, logMessages[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] text-sage/60 p-4 bg-soil/40 border border-sage/10 rounded-sm h-48 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-soil/60 pointer-events-none" />
      {logs.map((log, idx) => (
        <div key={idx} className="mb-1 flex gap-2">
          <span className="text-amber/40">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
          <span className="text-dust/80">{log}</span>
        </div>
      ))}
      <div className="w-1.5 h-3 bg-sage/40 animate-pulse inline-block ml-1" />
    </div>
  );
};

const SamaneoScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // Pin for 4 screen heights
        scrub: 1,
        pin: true,
      }
    });

    // Initial state
    gsap.set(section2Ref.current, { opacity: 0, scale: 0.8, y: 50 });
    gsap.set(section3Ref.current, { opacity: 0, scale: 0.8, y: 50 });
    gsap.set(lineRef.current, { height: "0%" });

    // Animation sequence
    tl.to(section1Ref.current, { opacity: 0, y: -50, duration: 1 })
      .to(lineRef.current, { height: "33%", duration: 0.5 }, "<")
      .to(section2Ref.current, { opacity: 1, scale: 1, y: 0, duration: 1 })
      .to(section2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")
      .to(lineRef.current, { height: "66%", duration: 0.5 }, "<")
      .to(section3Ref.current, { opacity: 1, scale: 1, y: 0, duration: 1 })
      .to(lineRef.current, { height: "100%", duration: 0.5 }, "+=0.5");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full bg-soil relative overflow-hidden flex items-center justify-center">
      {/* Central animated line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
        <div ref={lineRef} className="w-full bg-amber" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6">
        <div ref={section1Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h2 className="text-6xl md:text-8xl font-display text-white mb-6">The Cycle of Waste</h2>
          <p className="text-2xl text-fog max-w-2xl mx-auto">India loses ₹90,000 crore annually to post-harvest inefficiencies.</p>
        </div>

        <div ref={section2Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <div className="text-8xl md:text-[12rem] font-display text-amber/20 mb-[-4rem] md:mb-[-6rem]">30%</div>
          <h2 className="text-5xl md:text-7xl font-display text-white mb-6 relative z-10">Spoilage Before Market</h2>
          <p className="text-xl text-fog max-w-2xl mx-auto relative z-10">Driven by a near-complete absence of cold storage infrastructure and inefficient transportation.</p>
        </div>

        <div ref={section3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <div className="w-24 h-24 rounded-full border border-sage/30 flex items-center justify-center mx-auto mb-8 bg-sage/10">
            <Sprout className="w-10 h-10 text-sage" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display text-white mb-6">We Built The Solution</h2>
          <p className="text-xl text-fog max-w-2xl mx-auto">An integrated ecosystem of autonomous intelligence and modular logistics.</p>
        </div>
      </div>
    </div>
  );
};

const StatsBar = () => {
  const stats = [
    { label: "Post-Harvest Loss", value: "30%", sub: "Industry Avg" },
    { label: "Farmer Profit", value: "+40%", sub: "With Samaneo" },
    { label: "Waste Reduction", value: "85%", sub: "Targeted" },
    { label: "Market Reach", value: "10x", sub: "Expansion" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dust/10 border-y border-dust/10">
      {stats.map((stat, i) => (
        <div key={i} className="p-8 md:p-12 bg-soil flex flex-col items-center text-center">
          <span className="data-label mb-4">{stat.label}</span>
          <span className="text-4xl md:text-6xl font-display text-white mb-2">{stat.value}</span>
          <span className="text-xs text-fog uppercase tracking-widest">{stat.sub}</span>
        </div>
      ))}
    </div>
  );
};

const ProductPillars = () => {
  const pillars = [
    {
      id: "kilobot",
      title: "KiloBot",
      icon: Bot,
      desc: "Autonomous field intelligence. Real-time soil telemetry and crop triage scoring.",
      color: "text-sage",
      border: "border-sage/20"
    },
    {
      id: "veriator",
      title: "Veriator",
      icon: Truck,
      desc: "Modular cold-chain logistics. On-demand storage units that come to your field.",
      color: "text-amber",
      border: "border-amber/20"
    },
    {
      id: "marketplace",
      title: "Marketplace",
      icon: ShoppingBag,
      desc: "Direct-to-buyer ecosystem. Transparent pricing and smart contract execution.",
      color: "text-blue-400",
      border: "border-blue-400/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto py-32">
      {pillars.map((pillar) => (
        <div key={pillar.id} className={cn("sharp-card p-10 flex flex-col h-full", pillar.border)}>
          <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-clay/50", pillar.color)}>
            <pillar.icon className="w-8 h-8" />
          </div>
          <h3 className="text-3xl text-white mb-4">{pillar.title}</h3>
          <p className="text-fog leading-relaxed mb-8 flex-1">{pillar.desc}</p>
          <div className="flex items-center gap-2 text-dust font-mono text-xs uppercase tracking-widest group cursor-pointer">
            Explore System <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      ))}
    </div>
  );
};

const OperationalLoop = () => {
  const steps = [
    { id: "FIELD", icon: Leaf, title: "KiloBot monitors soil +\ncrop data" },
    { id: "HARVEST", icon: Package, title: "Triage scoring routes\nGrade A/B/C" },
    { id: "TRANSIT", icon: Truck, title: "Veriator cold chain\ntransport" },
    { id: "MARKET", icon: Store, title: "Samaneo direct\nmarketplace sale" },
    { id: "RETURN", icon: Recycle, title: "Organic waste back to\nfarms" }
  ];

  return (
    <section className="py-32 px-6 bg-[#0e0b07]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-white font-display italic text-center mb-24">Operational Loop</h2>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 w-full h-px bg-[#d4922a]/20 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#1c1409] border border-[#d4922a]/30 flex items-center justify-center mb-8 relative">
                  <step.icon className="w-8 h-8 text-[#f5f0e8]" strokeWidth={1.5} />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#f5f0e8] mb-4">{step.id}</h4>
                <p className="text-sm text-[#8a7f6e] whitespace-pre-line">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-32 px-6 bg-[#f5f0e8] text-[#1c1409]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h3 className="text-4xl md:text-6xl leading-tight font-display italic mb-8">
            "Three months of work. Loaded onto a truck.<br/>And all I could do was hope it survived the road."
          </h3>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8a7f6e]">
            — Ravi, Vegetable Farmer, Warangal District
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-3 gap-4 border-b border-[#d4922a]/30 pb-4 mb-4 text-xs font-mono uppercase tracking-widest text-[#8a7f6e]">
              <div>Comparison</div>
              <div>Before Aerica X</div>
              <div className="text-[#d4922a]">With Aerica X</div>
            </div>
            {[
              { label: "Post-harvest loss", before: "~32%", after: "~8% estimated" },
              { label: "Price realization", before: "30-40% of retail", after: "65-75% of retail" },
              { label: "Market access", before: "Local mandi only", after: "Direct + regional buyers" },
              { label: "Logistics", before: "Owned vehicle/wait", after: "On-demand Veriator booking" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 border-b border-[#1c1409]/10 py-6 text-sm">
                <div className="font-mono text-[#8a7f6e]">{row.label}</div>
                <div className="font-mono text-[#8a7f6e]">{row.before}</div>
                <div className="font-mono text-[#d4922a] font-bold">{row.after}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RevenueModel = () => {
  return (
    <section id="impact" className="py-32 px-6 border-y border-dust/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="data-label text-sage">Sustainable Growth</span>
          <h2 className="text-5xl md:text-7xl text-white mt-4">Revenue Model</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dust/10">
          {[
            { title: "Transaction Fee", value: "3%", desc: "Flat commission on every successful marketplace match.", icon: Percent },
            { title: "Logistics SaaS", value: "₹499", desc: "Monthly subscription for advanced KiloBot analytics.", icon: BarChart2 },
            { title: "Veriator Lease", value: "Dynamic", desc: "Pay-per-use modular storage and transport units.", icon: Truck }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-soil space-y-6">
              <div className="w-12 h-12 rounded-full bg-clay flex items-center justify-center text-amber">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-white">{item.title}</h3>
              <div className="text-4xl font-display text-white">{item.value}</div>
              <p className="text-fog text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="py-24 px-6 bg-clay/20 border-t border-dust/10 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display text-white mb-12 italic">The Team Behind Aerica-X</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl text-amber mb-2">Aayush Tulasi Ethakoti</h3>
            <p className="text-fog font-mono text-xs uppercase tracking-widest">Team Lead • 10th Grade</p>
          </div>
          <div>
            <h3 className="text-xl text-amber mb-2">Prince Rohan</h3>
            <p className="text-fog font-mono text-xs uppercase tracking-widest">Technical Lead • 10th Grade</p>
          </div>
        </div>
        <div className="inline-block px-6 py-3 border border-sage/30 bg-sage/10 rounded-full">
          <p className="text-sage font-mono text-xs uppercase tracking-widest">Oxford Grammar High School, Hyderabad</p>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-soil min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-gradient-to-b from-soil to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber flex items-center justify-center">
            <Sprout className="w-6 h-6 text-soil" />
          </div>
          <span className="font-display text-2xl text-white tracking-tight">SAMANEO</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-[10px] font-mono uppercase tracking-[0.3em] text-fog">
          <a href="#vision" className="hover:text-white transition-colors">Vision</a>
          <a href="#system" className="hover:text-white transition-colors">System</a>
          <a href="#impact" className="hover:text-white transition-colors">Impact</a>
          <button 
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
          >
            Demo Dashboard
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-sage/10 border border-sage/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-sage">System Online: Aerica X</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display text-white leading-[0.9] tracking-tighter">
              Farming <br />
              <span className="text-amber italic">Redefined.</span>
            </h1>
            <p className="text-xl text-fog max-w-lg leading-relaxed">
              An integrated ecosystem of autonomous intelligence and modular logistics designed to eliminate agricultural waste.
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => navigate('/dashboard')}
                className="px-10 py-5 bg-amber text-soil font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all flex items-center gap-3"
              >
                Launch Dashboard <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-10 py-5 border border-dust/20 text-white font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                Read Whitepaper
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-20 bg-amber/5 blur-[100px] rounded-full" />
            <SystemTerminal />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-6 glass-card">
                <span className="data-label">Active Nodes</span>
                <div className="text-3xl text-white mt-2">1,240</div>
              </div>
              <div className="p-6 glass-card">
                <span className="data-label">Waste Saved</span>
                <div className="text-3xl text-white mt-2">₹12.4M</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />
      <SamaneoScrollAnimation />
      
      <section id="system" className="py-32">
        <div className="text-center mb-20 px-6">
          <span className="data-label text-amber">The Ecosystem</span>
          <h2 className="text-5xl md:text-7xl text-white mt-4">Three Pillars of Samaneo</h2>
        </div>
        <ProductPillars />
      </section>

      <OperationalLoop />
      <Testimonial />
      <RevenueModel />
      <AboutUs />

      {/* CTA Section */}
      <section className="py-48 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-amber/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <h2 className="text-5xl md:text-8xl text-white leading-tight">Ready to optimize your harvest?</h2>
          <p className="text-xl text-fog max-w-2xl mx-auto">Join the network of farmers using Aerica X technology to secure their future.</p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="px-12 py-6 bg-white text-soil font-mono text-sm font-bold uppercase tracking-[0.3em] hover:bg-dust transition-all inline-flex items-center gap-4"
          >
            Enter Dashboard <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-dust/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber flex items-center justify-center">
              <Sprout className="w-5 h-5 text-soil" />
            </div>
            <span className="font-display text-xl text-white">SAMANEO</span>
          </div>
          <div className="flex gap-12 text-[10px] font-mono uppercase tracking-widest text-fog">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <p className="text-[10px] font-mono text-fog uppercase tracking-widest">© 2026 Aerica X Technologies</p>
        </div>
      </footer>
    </div>
  );
};

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- UI Components ---
interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hoverEffect = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-panel rounded-2xl overflow-hidden relative group",
          hoverEffect && "hover:border-amber/30 transition-colors duration-500",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {children}
      </motion.div>
    );
  }
);
GlassCard.displayName = "GlassCard";

// --- Dashboard Component ---
interface DashboardProps {
  onNavigate: (tab: 'overview' | 'kilobot' | 'veriator' | 'marketplace') => void;
}

function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif text-white mb-1">Welcome back, Rohan</h1>
          <p className="text-fog text-sm">Plot 42 is looking healthy today. 1 active alert.</p>
        </div>
        <button 
          onClick={() => onNavigate('veriator')}
          className="glass-button px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(212,146,42,0.2)]"
        >
          <Truck className="w-5 h-5" />
          <span>Book Veriator</span>
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Soil Moisture', value: '42%', icon: Droplets, color: 'text-blue-400', bg: 'bg-blue-400/10' },
          { label: 'pH Level', value: '6.8', icon: Sprout, color: 'text-sage', bg: 'bg-sage/10' },
          { label: 'Temperature', value: '28°C', icon: ThermometerSun, color: 'text-amber', bg: 'bg-amber/10' },
          { label: 'Humidity', value: '65%', icon: Wind, color: 'text-gray-300', bg: 'bg-white/10' },
        ].map((stat, i) => (
          <GlassCard key={i} hoverEffect className="p-5 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span className="text-xs font-mono text-fog">Live</span>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white font-mono">{stat.value}</p>
              <p className="text-xs text-fog uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="col-span-1 lg:col-span-2 p-6 border-amber/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3 rounded-xl bg-amber/20 border border-amber/30 text-amber">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Overproduction Alert</h3>
                <span className="text-xs font-mono text-amber bg-amber/10 px-2 py-1 rounded-md border border-amber/20">
                  Harvest - 3 Weeks
                </span>
              </div>
              <p className="text-sm text-dust mb-4 leading-relaxed">
                KiloBot projects a 15% surplus yield for your Tomato crop based on current growth rates. 
                Market demand in your region is trending lower.
              </p>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => onNavigate('marketplace')}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10 flex items-center gap-2"
                >
                  <Store className="w-4 h-4" />
                  Find Buyers Now
                </button>
                <button 
                  onClick={() => onNavigate('kilobot')}
                  className="px-4 py-2 rounded-lg text-amber hover:bg-amber/10 text-sm font-medium transition-colors flex items-center gap-2"
                >
                  View Triage Score
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Active Logistics</h3>
            <button onClick={() => onNavigate('veriator')} className="text-fog hover:text-amber transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
              <Truck className="w-8 h-8 text-fog" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-sage border-2 border-soil" />
            </div>
            <div>
              <p className="text-white font-medium">No active bookings</p>
              <p className="text-sm text-fog mt-1">Book a Veriator truck when your crop is ready for harvest.</p>
            </div>
            <button 
              onClick={() => onNavigate('veriator')}
              className="mt-4 w-full py-2.5 rounded-lg border border-amber/30 text-amber hover:bg-amber/10 transition-colors text-sm font-medium"
            >
              Schedule Pickup
            </button>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-sage" />
            Local Market Demand
          </h3>
          <button onClick={() => onNavigate('marketplace')} className="text-sm text-amber hover:text-gold transition-colors">
            View Marketplace
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { crop: 'Tomatoes', price: '₹24/kg', trend: '-2%', status: 'Surplus', color: 'text-red-400' },
            { crop: 'Onions', price: '₹32/kg', trend: '+5%', status: 'High Demand', color: 'text-sage' },
            { crop: 'Potatoes', price: '₹18/kg', trend: '0%', status: 'Stable', color: 'text-amber' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-white">{item.crop}</span>
                <span className={`text-xs font-mono px-2 py-1 rounded-md bg-white/5 ${item.color}`}>
                  {item.trend}
                </span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-mono text-dust">{item.price}</span>
                <span className="text-xs text-fog uppercase tracking-wider">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

// --- KiloBot Component ---
const kiloBotMockData = [
  { time: '00:00', moisture: 45, ph: 6.8, temp: 22 },
  { time: '04:00', moisture: 42, ph: 6.8, temp: 20 },
  { time: '08:00', moisture: 40, ph: 6.7, temp: 24 },
  { time: '12:00', moisture: 38, ph: 6.7, temp: 29 },
  { time: '16:00', moisture: 35, ph: 6.6, temp: 31 },
  { time: '20:00', moisture: 42, ph: 6.8, temp: 26 },
  { time: '24:00', moisture: 40, ph: 6.8, temp: 23 },
];

const healthData = [
  { subject: 'Nitrogen', A: 80, fullMark: 100 },
  { subject: 'Phosphorus', A: 65, fullMark: 100 },
  { subject: 'Potassium', A: 90, fullMark: 100 },
  { subject: 'Moisture', A: 75, fullMark: 100 },
  { subject: 'pH Balance', A: 85, fullMark: 100 },
  { subject: 'Aeration', A: 70, fullMark: 100 },
];

const yieldData = [
  { name: '2023', actual: 3800, projected: 4000 },
  { name: '2024', actual: 4200, projected: 4100 },
  { name: '2025', actual: 4600, projected: 4500 },
  { name: '2026 (Est)', actual: 0, projected: 5200 },
];

function KiloBot() {
  const [activeMetric, setActiveMetric] = useState<'moisture' | 'ph' | 'temp'>('moisture');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif text-white mb-1">KiloBot Field Intelligence</h1>
          <p className="text-fog text-sm">Real-time soil and atmospheric data for Plot 42.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sage/10 border border-sage/20 text-sage text-sm font-medium">
          <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
          Live Sync Active
        </div>
      </div>

      <GlassCard className="p-6 border-amber/20">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber/20 text-amber">
                <Activity className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-white">Crop Triage Score</h2>
            </div>
            <p className="text-dust text-sm leading-relaxed mb-6">
              Based on current growth metrics, soil health, and micro-weather patterns, KiloBot has automatically graded your upcoming harvest.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { grade: 'A', desc: 'Premium Quality', percent: '65%', color: 'text-sage', border: 'border-sage/30', bg: 'bg-sage/10' },
                { grade: 'B', desc: 'Standard Market', percent: '25%', color: 'text-amber', border: 'border-amber/30', bg: 'bg-amber/10' },
                { grade: 'C', desc: 'Processing/Juice', percent: '10%', color: 'text-red-400', border: 'border-red-400/30', bg: 'bg-red-400/10' },
              ].map((item) => (
                <div key={item.grade} className={`p-4 rounded-xl border ${item.border} ${item.bg} flex flex-col items-center justify-center text-center`}>
                  <span className={`text-3xl font-serif font-bold ${item.color}`}>{item.grade}</span>
                  <span className="text-xl font-mono text-white mt-1">{item.percent}</span>
                  <span className="text-[10px] uppercase tracking-wider text-fog mt-2">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            <h3 className="text-white font-medium mb-4 flex items-center gap-2">
              <Sprout className="w-4 h-4 text-sage" />
              Routing Recommendation
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage shrink-0" />
                <span className="text-dust">Grade A routed to premium buyers in Mumbai (₹45/kg).</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber shrink-0" />
                <span className="text-dust">Grade B listed on local Samaneo marketplace (₹28/kg).</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-dust">Grade C matched with local processing unit (₹12/kg).</span>
              </li>
            </ul>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">24h Telemetry</h3>
              <div className="flex gap-2">
                {(['moisture', 'ph', 'temp'] as const).map((metric) => (
                  <button
                    key={metric}
                    onClick={() => setActiveMetric(metric)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${
                      activeMetric === metric 
                        ? 'bg-amber/20 text-amber border border-amber/30' 
                        : 'bg-white/5 text-fog hover:text-dust border border-white/10'
                    }`}
                  >
                    {metric}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={kiloBotMockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d4922a" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#d4922a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="time" stroke="rgba(255,255,255,0.2)" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.2)" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(14, 11, 7, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }} itemStyle={{ color: '#d4922a' }} />
                  <Area type="monotone" dataKey={activeMetric} stroke="#d4922a" strokeWidth={2} fillOpacity={1} fill="url(#colorMetric)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Nutrient Profile</h3>
            <div className="space-y-4">
              {[
                { label: 'Nitrogen (N)', value: 45, max: 100, color: 'bg-sage' },
                { label: 'Phosphorus (P)', value: 30, max: 100, color: 'bg-amber' },
                { label: 'Potassium (K)', value: 60, max: 100, color: 'bg-blue-400' },
              ].map((nutrient) => (
                <div key={nutrient.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-dust">{nutrient.label}</span>
                    <span className="text-white font-mono">{nutrient.value} mg/kg</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${(nutrient.value / nutrient.max) * 100}%` }} transition={{ duration: 1, ease: "easeOut" }} className={`h-full ${nutrient.color} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-amber/10 border border-amber/20 flex gap-3">
              <Info className="w-5 h-5 text-amber shrink-0" />
              <p className="text-xs text-amber leading-relaxed">Nitrogen levels are slightly below optimal for the current growth stage. Consider applying a nitrogen-rich fertilizer within the next 48 hours.</p>
            </div>
          </GlassCard>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-sage" />
            Comprehensive Soil Health
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={healthData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Plot 42" dataKey="A" stroke="#7a9e6e" fill="#7a9e6e" fillOpacity={0.4} />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(14, 11, 7, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-amber" />
            Yield Trajectory (kg/acre)
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yieldData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="rgba(255,255,255,0.2)" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: 'rgba(14, 11, 7, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }} />
                <Bar dataKey="actual" name="Actual Yield" fill="#d4922a" radius={[4, 4, 0, 0]} />
                <Bar dataKey="projected" name="AI Projected" fill="#7a9e6e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

// --- Veriator Component ---
type ContainerType = 'cold' | 'dry';

function Veriator() {
  const [containerType, setContainerType] = useState<ContainerType>('cold');
  const [pickupLocation, setPickupLocation] = useState('Plot 42, Maharashtra');
  const [dropoffLocation, setDropoffLocation] = useState('Mumbai APMC Market');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [distance, setDistance] = useState(124);
  const [fare, setFare] = useState(3450);

  useEffect(() => {
    if (pickupLocation && dropoffLocation) {
      const mockDist = Math.max(15, Math.floor((pickupLocation.length * dropoffLocation.length * 3.7) % 400));
      setDistance(mockDist);
      const baseFare = 500;
      const perKm = containerType === 'cold' ? 28 : 16;
      setFare(baseFare + (mockDist * perKm));
    } else {
      setDistance(0);
      setFare(0);
    }
  }, [pickupLocation, dropoffLocation, containerType]);

  const handleBook = () => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setBookingConfirmed(true);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif text-white mb-1">Veriator Logistics</h1>
          <p className="text-fog text-sm">Book a modular storage unit directly to your field.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Schedule Pickup</h2>
            <div className="space-y-6">
              <div>
                <label className="text-xs text-fog uppercase tracking-wider mb-3 block">Container Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => setContainerType('cold')} className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${containerType === 'cold' ? 'bg-blue-400/10 border-blue-400/30 text-blue-400' : 'bg-white/5 border-white/10 text-fog hover:text-dust'}`}>
                    <Snowflake className="w-6 h-6" />
                    <span className="text-sm font-medium">Cold Storage</span>
                  </button>
                  <button onClick={() => setContainerType('dry')} className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${containerType === 'dry' ? 'bg-amber/10 border-amber/30 text-amber' : 'bg-white/5 border-white/10 text-fog hover:text-dust'}`}>
                    <Package className="w-6 h-6" />
                    <span className="text-sm font-medium">Dry Storage</span>
                  </button>
                </div>
              </div>
              <div className="space-y-4 relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-white/10" />
                <div className="relative">
                  <label className="text-xs text-fog uppercase tracking-wider mb-2 block">Pickup Location</label>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 z-10">
                      <div className="w-3 h-3 rounded-full bg-amber" />
                    </div>
                    <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} className="glass-input w-full" placeholder="Enter pickup location" />
                  </div>
                </div>
                <div className="relative">
                  <label className="text-xs text-fog uppercase tracking-wider mb-2 block">Drop-off Location</label>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 z-10">
                      <MapPin className="w-5 h-5 text-sage" />
                    </div>
                    <input type="text" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} className="glass-input w-full" placeholder="Enter drop-off location" />
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-fog flex items-center gap-2"><Clock className="w-4 h-4" /> ETA</span>
                  <span className="text-white font-mono">{Math.max(10, Math.floor(distance * 1.2))} mins</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-fog flex items-center gap-2"><MapPin className="w-4 h-4" /> Distance</span>
                  <span className="text-white font-mono">{distance} km</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <span className="text-dust font-medium">Estimated Fare</span>
                  <div className="text-right">
                    <span className="text-2xl font-mono text-amber">₹{fare.toLocaleString('en-IN')}</span>
                    <p className="text-[10px] text-fog uppercase tracking-wider mt-1">{containerType === 'cold' ? 'Includes Cold Chain Surcharge' : 'Standard Dry Rate'}</p>
                  </div>
                </div>
              </div>
              <AnimatePresence mode="wait">
                {!bookingConfirmed ? (
                  <motion.button key="book" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleBook} disabled={isBooking} className="w-full py-4 rounded-xl bg-gradient-to-r from-amber to-gold text-soil font-semibold text-lg hover:shadow-[0_0_20px_rgba(212,146,42,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70">
                    {isBooking ? <div className="w-6 h-6 border-2 border-soil/30 border-t-soil rounded-full animate-spin" /> : <>Confirm Booking<ChevronRight className="w-5 h-5" /></>}
                  </motion.button>
                ) : (
                  <motion.div key="confirmed" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full py-4 rounded-xl bg-sage/20 border border-sage/30 text-sage font-semibold text-lg flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-6 h-6" /> Driver Assigned
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </GlassCard>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="h-[400px] lg:h-full min-h-[500px] relative overflow-hidden flex items-center justify-center bg-soil/50">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            {bookingConfirmed ? (
              <div className="relative z-10 flex flex-col items-center text-center max-w-md p-8 rounded-2xl bg-soil/80 backdrop-blur-md border border-white/10">
                <div className="w-20 h-20 rounded-full bg-sage/20 border border-sage/30 flex items-center justify-center mb-6">
                  <Truck className="w-10 h-10 text-sage" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Veriator is on the way</h3>
                <p className="text-fog mb-6">Driver Ramesh is arriving in 45 minutes. Your {containerType} storage unit is pre-conditioned to optimal temperature.</p>
                <div className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-fog uppercase tracking-wider">Vehicle</span>
                    <span className="text-sm text-white font-mono">MH 12 AB 3456</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-fog uppercase tracking-wider">Driver</span>
                    <span className="text-sm text-white">Ramesh Kumar (4.8★)</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <MapPin className="w-10 h-10 text-fog" />
                </div>
                <p className="text-fog text-lg">Select locations to view route</p>
              </div>
            )}
            {bookingConfirmed && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.3 }}>
                <path d="M 100 400 Q 300 300 500 200 T 800 100" fill="none" stroke="#d4922a" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_20s_linear_infinite]" />
              </svg>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

// --- Marketplace Component ---
const mockBuyers = [
  { id: 1, name: 'FreshMart Organics', type: 'Retail Chain', rating: 4.9, distance: '12 km', demand: 'Tomatoes', price: '₹45/kg', numericPrice: 45, verified: true },
  { id: 2, name: 'Mumbai APMC Trader', type: 'Wholesaler', rating: 4.5, distance: '124 km', demand: 'Potatoes', price: '₹28/kg', numericPrice: 28, verified: true },
  { id: 3, name: 'AgroJuice Processors', type: 'Processing Unit', rating: 4.2, distance: '45 km', demand: 'Tomatoes (Grade C)', price: '₹12/kg', numericPrice: 12, verified: false },
  { id: 4, name: 'Green Leaf Grocers', type: 'Local Vendor', rating: 4.7, distance: '5 km', demand: 'Mixed Veg', price: '₹35/kg', numericPrice: 35, verified: true },
];

function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBuyer, setSelectedBuyer] = useState<typeof mockBuyers[0] | null>(null);
  const [quantity, setQuantity] = useState<number>(100);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAcceptOffer = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedBuyer(null);
        setQuantity(100);
      }, 2500);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif text-white mb-1">Samaneo Marketplace</h1>
          <p className="text-fog text-sm">Connect directly with verified buyers. 3% flat commission.</p>
        </div>
        <button className="glass-button px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(212,146,42,0.2)]">
          <Store className="w-5 h-5" />
          <span>List Produce</span>
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Filter className="w-5 h-5 text-amber" /> Filters</h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs text-fog uppercase tracking-wider mb-3 block">Crop Type</label>
                <div className="space-y-2">
                  {['Tomatoes', 'Onions', 'Potatoes', 'Wheat'].map((crop) => (
                    <label key={crop} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-white/20 group-hover:border-amber/50 flex items-center justify-center bg-white/5 transition-colors">
                        {crop === 'Tomatoes' && <div className="w-3 h-3 rounded-sm bg-amber" />}
                      </div>
                      <span className="text-sm text-dust group-hover:text-white transition-colors">{crop}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-fog uppercase tracking-wider mb-3 block">Buyer Type</label>
                <div className="space-y-2">
                  {['Retail Chain', 'Wholesaler', 'Processing Unit', 'Local Vendor'].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-white/20 group-hover:border-amber/50 flex items-center justify-center bg-white/5 transition-colors" />
                      <span className="text-sm text-dust group-hover:text-white transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-sage/10 border border-sage/20">
                  <Percent className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-sage mb-1">Transparent Pricing</h4>
                    <p className="text-xs text-sage/80 leading-relaxed">Samaneo charges a flat 3% commission on successful transactions. No hidden fees.</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fog" />
            <input type="text" placeholder="Search buyers, crops, or locations..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl pl-12 pr-4 py-4 text-dust placeholder:text-fog focus:outline-none focus:border-amber/50 transition-colors shadow-lg" />
          </div>
          <div className="space-y-4">
            {mockBuyers.map((buyer) => (
              <GlassCard key={buyer.id} hoverEffect className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-white">{buyer.name}</h3>
                    {buyer.verified && <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-sage/20 text-sage text-xs font-medium border border-sage/30"><ShieldCheck className="w-3 h-3" /> Verified</div>}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-fog mb-4">
                    <span className="flex items-center gap-1"><Star className="w-4 h-4 text-gold fill-gold" /> {buyer.rating}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{buyer.type}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{buyer.distance} away</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-fog">Seeking:</span>
                    <span className="text-sm text-dust font-medium">{buyer.demand}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-4 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider text-fog mb-1">Current Offer</p>
                    <p className="text-2xl font-mono text-amber">{buyer.price}</p>
                  </div>
                  <button onClick={() => setSelectedBuyer(buyer)} className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-amber/20 hover:bg-amber/30 text-amber font-medium transition-colors border border-amber/30 flex items-center justify-center gap-2">Accept Offer<ArrowRight className="w-4 h-4" /></button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedBuyer && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-soil/80 backdrop-blur-md">
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="w-full max-w-md">
              <GlassCard className="p-6 border-amber/30 shadow-[0_0_40px_rgba(212,146,42,0.15)]">
                {isSuccess ? (
                  <div className="py-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-4"><CheckCircle2 className="w-8 h-8 text-sage" /></div>
                    <h3 className="text-2xl font-serif text-white mb-2">Offer Accepted!</h3>
                    <p className="text-fog">Your produce has been matched with {selectedBuyer.name}. A Veriator truck has been notified.</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div><h3 className="text-xl font-semibold text-white mb-1">Accept Offer</h3><p className="text-sm text-fog">Selling to {selectedBuyer.name}</p></div>
                      <button onClick={() => setSelectedBuyer(null)} className="p-2 rounded-lg hover:bg-white/10 text-fog hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                    </div>
                    <div className="space-y-6">
                      <div><label className="text-xs text-fog uppercase tracking-wider mb-2 block">Quantity to Sell (kg)</label><input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="glass-input w-full text-lg font-mono" min="10" /></div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                        <div className="flex justify-between text-sm"><span className="text-fog">Gross Value ({quantity}kg × ₹{selectedBuyer.numericPrice})</span><span className="text-white font-mono">₹{(quantity * selectedBuyer.numericPrice).toLocaleString('en-IN')}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-fog">Samaneo Fee (3%)</span><span className="text-red-400 font-mono">-₹{Math.round(quantity * selectedBuyer.numericPrice * 0.03).toLocaleString('en-IN')}</span></div>
                        <div className="pt-3 border-t border-white/10 flex justify-between items-center"><span className="text-dust font-medium">Net Payout</span><span className="text-2xl font-mono text-sage">₹{Math.round(quantity * selectedBuyer.numericPrice * 0.97).toLocaleString('en-IN')}</span></div>
                      </div>
                      <button onClick={handleAcceptOffer} disabled={isProcessing} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber to-gold text-soil font-semibold hover:shadow-[0_0_20px_rgba(212,146,42,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70">{isProcessing ? <div className="w-5 h-5 border-2 border-soil/30 border-t-soil rounded-full animate-spin" /> : 'Confirm Transaction'}</button>
                    </div>
                  </>
                )}
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main App Component ---
type Tab = 'overview' | 'kilobot' | 'veriator' | 'marketplace';

function DashboardLayout() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'kilobot', label: 'KiloBot', icon: Sprout },
    { id: 'veriator', label: 'Veriator', icon: Truck },
    { id: 'marketplace', label: 'Marketplace', icon: Store },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Dashboard onNavigate={setActiveTab} />;
      case 'kilobot': return <KiloBot />;
      case 'veriator': return <Veriator />;
      case 'marketplace': return <Marketplace />;
      default: return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-soil text-dust font-sans relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sage/5 blur-[120px]" />
      </div>

      <aside className="hidden md:flex flex-col w-64 h-screen border-r border-white/5 bg-soil/50 backdrop-blur-3xl z-10 p-6">
        <div className="flex items-center gap-3 mb-12 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber to-gold flex items-center justify-center shadow-[0_0_15px_rgba(212,146,42,0.3)]">
            <Sprout className="w-5 h-5 text-soil" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-semibold tracking-wide text-white">SAMANEO</h1>
            <p className="text-[10px] tracking-widest text-fog uppercase">By Aerica X</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative group", isActive ? "text-amber" : "text-fog hover:text-dust hover:bg-white/5")}>
                {isActive && <motion.div layoutId="active-tab-bg" className="absolute inset-0 bg-amber/10 rounded-xl border border-amber/20" initial={false} transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                <Icon className={cn("w-5 h-5 relative z-10", isActive ? "text-amber" : "text-fog group-hover:text-dust")} />
                <span className="font-medium relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="mt-auto pt-6 border-t border-white/5">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-fog hover:text-dust hover:bg-white/5 transition-all"><Settings className="w-5 h-5" /><span className="font-medium">Settings</span></button>
          <div className="mt-4 flex items-center gap-3 px-4 py-2">
            <div className="w-10 h-10 rounded-full bg-clay border border-white/10 flex items-center justify-center overflow-hidden"><User className="w-5 h-5 text-dust" /></div>
            <div className="flex-1 min-w-0"><p className="text-sm font-medium text-white truncate">Rohan Farmer</p><p className="text-xs text-fog truncate">Plot 42, Maharashtra</p></div>
          </div>
        </div>
      </aside>

      <header className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-soil/80 backdrop-blur-xl z-20 sticky top-0">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-6 h-6 rounded bg-amber flex items-center justify-center">
            <Sprout className="w-4 h-4 text-soil" />
          </div>
          <span className="font-serif font-bold text-white">SAMANEO</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-fog"><Menu className="w-6 h-6" /></button>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-soil/95 backdrop-blur-xl md:hidden">
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}>
                  <div className="w-8 h-8 rounded bg-amber flex items-center justify-center"><Sprout className="w-5 h-5 text-soil" /></div>
                  <span className="font-serif font-bold text-xl text-white">SAMANEO</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-fog"><X className="w-6 h-6" /></button>
              </div>
              <nav className="space-y-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button key={tab.id} onClick={() => { setActiveTab(tab.id); setIsMobileMenuOpen(false); }} className={cn("w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-lg font-medium transition-all", isActive ? "bg-amber/10 text-amber border border-amber/20" : "text-fog")}>
                      <Icon className="w-6 h-6" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 h-screen overflow-y-auto relative z-0 scroll-smooth">
        <header className="hidden md:flex items-center justify-between px-8 py-6 sticky top-0 z-20 bg-gradient-to-b from-soil/90 to-transparent backdrop-blur-[2px]">
          <div className="flex items-center gap-2"><h2 className="text-2xl font-semibold text-white tracking-tight">{tabs.find(t => t.id === activeTab)?.label}</h2></div>
          <div className="flex items-center gap-4"><div className="relative"><button className="p-2.5 text-fog hover:text-dust rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"><Bell className="w-5 h-5" /></button><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber shadow-[0_0_8px_rgba(212,146,42,0.8)]" /></div></div>
        </header>

        <div className="px-4 py-6 md:px-8 md:py-2 pb-24 md:pb-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

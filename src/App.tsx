import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Layout, 
  Figma, 
  Code, 
  Database, 
  Award, 
  Users, 
  Menu, 
  X,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Layers,
  Search,
  CheckCircle2,
  Trophy,
  Briefcase,
  Palette
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Custom Icons ---
const BehanceIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M22 7h-7v-2h7v2zm-11.5 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-3.5 10.5h-4.5v-10h4.5c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2 1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2zm11.5-7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.4 0 2.7-.6 3.5-1.6l-1.4-1.4c-.5.6-1.3 1-2.1 1-1.4 0-2.5-1.1-2.5-2.5h6c0-2.5-2-4.5-4.5-4.5z"/>
  </svg>
);

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold font-display mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1.5 gradient-bg mx-auto mt-6 rounded-full"
    />
  </div>
);

const SkillCard = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl bg-slate-900 border border-white/5 shadow-sm hover:shadow-md transition-all"
  >
    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4 font-display text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ExperienceItem = ({ role, company, period, description }: { role: string, company: string, period: string, description: string[] }) => (
  <div className="relative pl-6 sm:pl-8 pb-12 border-l-2 border-slate-800 last:pb-0 last:border-l-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full gradient-bg border-4 border-slate-950 shadow-sm" />
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
      <h3 className="text-xl font-bold font-display text-white">{role}</h3>
      <span className="px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold w-fit border border-purple-500/20">
        {period}
      </span>
    </div>
    <p className="text-lg font-medium text-slate-300 mb-4">{company}</p>
    <ul className="space-y-2">
      {description.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-slate-400">
          <ChevronRight size={18} className="text-purple-500 mt-1 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, description, tools, image, features, link }: { title: string, description: string, tools: string[], image: string, features: string[], link?: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-slate-900 rounded-3xl overflow-hidden border border-white/5 shadow-lg hover:shadow-2xl transition-all"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <div className="flex gap-4">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-slate-900 hover:bg-purple-500 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {link?.includes('github') && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-slate-900 hover:bg-purple-500 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="p-6 sm:p-8">
      <h3 className="text-2xl font-bold mb-3 font-display text-white group-hover:text-purple-400 transition-colors">{title}</h3>
      <p className="text-slate-400 mb-6 line-clamp-3">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Key Features</h4>
        <ul className="grid grid-cols-1 gap-2">
          {features.slice(0, 3).map(f => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
              <CheckCircle2 size={14} className="text-emerald-500" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {tools.map(tool => (
          <span key={tool} className="text-xs font-bold px-3 py-1 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
      {/* Background Animations */}
      <div className="bg-animate" />
      <div className="wavy-bg" />
      <div className="glitter-bg" />

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-slate-950/80 backdrop-blur-lg shadow-lg py-3 border-b border-white/5" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a 
            href="#" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-display gradient-text"
          >
            Hansini Rathnayaka
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-slate-400 hover:text-purple-400 font-medium transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-2.5 gradient-bg text-white rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all active:scale-95"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-white/5 mt-4 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-400 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="w-full py-3 gradient-bg text-white rounded-xl font-bold">
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -120, 0],
              x: [0, -150, 0],
              y: [0, 100, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 font-bold text-sm mb-6 border border-purple-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Available for new opportunities
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-4 md:mb-6 text-white"
            >
              Hi, I'm <span className="gradient-text">Hansini Rathnayaka</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Creative and detail-oriented <span className="font-bold text-white underline decoration-purple-500 decoration-4 underline-offset-4">UI/UX Engineer</span> passionate about designing intuitive digital experiences.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <a 
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 gradient-bg text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all"
              >
                View Projects <ChevronRight size={20} />
              </a>
              <a 
                href="/cv.pdf" 
                download="Hansini_Rathnayaka_CV.pdf"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-slate-900 text-white border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
              >
                Download CV <Download size={20} />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 md:mt-12 flex items-center justify-center md:justify-start gap-4 sm:gap-6 text-slate-500"
            >
              <a href="https://github.com/Hansini98-R" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><Github size={24} /></a>
              <a href="http://www.linkedin.com/in/hansini-rathnayaka-0a4195200/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><Linkedin size={24} /></a>
              <a href="https://www.behance.net/hansinirathnayakauor" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><BehanceIcon size={24} /></a>
              <a href="mailto:hansinirathnayaka98@gmail.com" className="hover:text-purple-400 transition-colors"><Mail size={24} /></a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto mb-12 md:mb-0">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-dashed border-purple-200 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-dashed border-blue-200 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Profile Image Placeholder */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-8 border-slate-900 shadow-2xl">
                <img 
                  src="assets/Hansini.jpeg" 
                  alt="Hansini Rathnayaka" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 glass-card rounded-2xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Layout size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Expertise</p>
                  <p className="text-sm font-bold text-white">UI/UX Design</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 p-4 glass-card rounded-2xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Code size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Tech</p>
                  <p className="text-sm font-bold text-white">Frontend Eng</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        <div className="section-wavy-bg" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center">
            <div className="max-w-3xl text-center">
              <SectionHeading subtitle="A glimpse into my professional journey and philosophy.">
                About Me
              </SectionHeading>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  I am a <span className="font-bold text-white">UI/UX Engineer</span> with a Bachelor’s degree in ICT (Hons.) from the University of Ruhuna. Currently working as an Associate UI/UX Engineer at BotCalm Pvt Ltd, I specialize in bridging the gap between design and technology.
                </p>
                <p>
                  My approach is deeply rooted in <span className="font-bold text-white">user-centered design</span>. I believe that great digital products are born from a deep understanding of human behavior, combined with technical precision and aesthetic clarity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-white/5">
                    <h4 className="text-3xl font-bold gradient-text mb-1">1+</h4>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-white/5">
                    <h4 className="text-3xl font-bold gradient-text mb-1">10+</h4>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="My technical toolkit and areas of expertise.">
            Technical Skills
          </SectionHeading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              title="Design" 
              icon={Layout}
              skills={["UI Design", "UX Design", "Wireframing", "Prototyping", "Design Systems", "Interaction Design"]} 
            />
            <SkillCard 
              title="Frontend" 
              icon={Code}
              skills={["HTML5", "CSS3", "JavaScript", "Flutter", "React", "Tailwind CSS"]} 
            />
            <SkillCard 
              title="Backend & DB" 
              icon={Database}
              skills={["Python", "PHP", "Java", "Node.js", "MySQL", "MS SQL Server"]} 
            />
            <SkillCard 
              title="Tools" 
              icon={Figma}
              skills={["Figma", "GitHub", "VS Code", "Photoshop", "Canva", "Adobe XD"]} 
            />
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-slate-900 border border-white/5 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 font-display text-center text-white">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Communication", "Leadership", "Problem Solving", "Time Management", "Analytical Thinking", "Team Collaboration"].map((skill) => (
                <div key={skill} className="px-4 py-2 sm:px-6 sm:py-3 rounded-2xl bg-purple-500/10 text-purple-400 font-bold border border-purple-500/20 text-sm sm:text-base">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="My professional growth and industry contributions.">
            Work Experience
          </SectionHeading>
          
          <div className="mt-16">
            <ExperienceItem 
              role="Associate UI/UX Engineer"
              company="BotCalm Private Limited"
              period="Feb 2025 – Present"
              description={[
                "Design and develop user-centered web and mobile interfaces.",
                "Create wireframes, high-fidelity prototypes, and design systems for scalable products.",
                "Collaborate with developers and product teams to ensure seamless UI implementation.",
                "Improve usability and optimize workflows based on user feedback.",
                "Contribute to backend development and API integrations when required."
              ]}
            />
            <ExperienceItem 
              role="Trainee UI/UX Engineer"
              company="BotCalm Private Limited"
              period="Jun 2024 – Dec 2024"
              description={[
                "Assisted in UI design for digital platforms and web applications.",
                "Conducted usability testing and gathered user insights for product improvements.",
                "Developed responsive layouts and ensured cross-device compatibility.",
                "Supported design revisions based on stakeholder feedback."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="A selection of my recent work and research projects.">
            Featured Projects
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="WanderLux - Travel & Tourism"
              description="A modern and elegant travel website UI designed to inspire exploration and simplify trip planning. WanderLuxe combines immersive visuals, intuitive navigation, and a luxury-driven aesthetic to create a seamless user experience from destination discovery to booking."
              image="assets/ChatGPT Image Mar 18, 2026, 05_52_56 PM.png"
              tools={["Figma", "UI/UX", "Web Design"]}
              features={["Immersive Visuals", "Intuitive Booking", "Luxury Aesthetic", "Destination Discovery"]}
              link="https://www.behance.net/gallery/246018133/WanderLuxe-Travel-Tourism-Website-UI-Design"
            />
            <ProjectCard 
              title="Smart Home Dashboard"
              description="A clean and intuitive smart home dashboard designed to provide seamless control and real-time insights. The interface focuses on usability, clear data visualization, and a structured layout to enhance user interaction and simplify smart device management."
              image="assets/Black and Beige Simple Phone UI Mockup Instagram Post.png"
              tools={["Figma", "Prototyping", "UI/UX"]}
              features={["Device Control", "Real-time Insights", "Structured Layout", "Data Visualization"]}
              link="https://www.behance.net/gallery/202616373/Smart-Home-Dashboard-Website-Prototype"
            />
            <ProjectCard 
              title="LMS - Learning Management System"
              description="A comprehensive multi-portal learning management system designed for seamless educational workflows."
              image="assets/ChatGPT Image Mar 18, 2026, 05_44_52 PM.png"
              tools={["Figma", "React", "Node.js", "MySQL"]}
              features={["Multi-portal Access", "Course Management", "Student Tracking", "Resource Sharing"]}
              link="https://github.com/Hansini98-R/Learning-Management-System-LMS-"
            />
            
            <AnimatePresence>
              {showAllProjects && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard 
                      title="Cryptolink - Trading Platform"
                      description="Cryptolink is a modern blockchain-based trading platform concept designed to deliver a fast, secure, and seamless crypto trading experience. This UI project focuses on combining cutting-edge technology with a sleek, futuristic interface."
                      image="assets/Gray and Black Minimalist Digital Mockup Facebook Post.png"
                      tools={["Figma", "UI/UX", "Blockchain", "Prototyping"]}
                      features={["Futuristic UI", "Real-time Trading View", "Secure Wallet Interface", "Asset Analytics"]}
                      link="https://www.behance.net/gallery/246027535/Cryptolink"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <ProjectCard 
                      title="Finance Management System"
                      description="A sophisticated financial dashboard for transaction tracking, reporting, and analytics visualization."
                      image="assets/ChatGPT Image Mar 18, 2026, 05_50_46 PM.png"
                      tools={["Flutter", "Firebase", "Dart", "Figma"]}
                      features={["Transaction Tracking", "Visual Analytics", "Budget Planning", "Real-time Sync"]}
                      link="https://github.com/Hansini98-R/Finance-Management-System"
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2 mx-auto"
            >
              {showAllProjects ? "Show Less" : "View More Projects"}
              <motion.div animate={{ rotate: showAllProjects ? 180 : 0 }}>
                <ChevronRight size={20} className="rotate-90" />
              </motion.div>
            </button>
          </div>
        </div>
      </section>

      {/* Achievements & Leadership */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl gradient-bg text-white">
                  <Trophy size={24} />
                </div>
                <h3 className="text-3xl font-bold font-display text-white">Achievements</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Excellence in Marketing", org: "AIESEC in University of Ruhuna", year: "2022" },
                  { title: "Exceptional in Digital Experience", org: "AIESEC in University of Ruhuna", year: "2023" },
                  { title: "Most Outstanding Leo District Council Officer", org: "Winner - Leo District 306A1", year: "2023-24" },
                  { title: "Most Outstanding Club Vice President", org: "1st Runner-up - Leo District 306A1", year: "2023-24" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-6 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-bold text-white group-hover:text-purple-400 transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.org}</p>
                    </div>
                    <span className="text-sm font-bold text-slate-500">{item.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl gradient-bg text-white">
                  <Users size={24} />
                </div>
                <h3 className="text-3xl font-bold font-display text-white">Leadership</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { role: "District Vice President", org: "Leo District 306 D8" },
                  { role: "Vice President", org: "Leo Club of University of Ruhuna" },
                  { role: "Director of Media & Marketing", org: "Leo District 306A1" },
                  { role: "Marketing Coordinator", org: "AIESEC in Sri Lanka" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <h4 className="font-bold text-purple-400 mb-1">{item.role}</h4>
                    <p className="text-sm text-purple-300 font-medium">{item.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full -z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Let's work <span className="gradient-text">together!</span></h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-purple-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email Me</p>
                    <a href="mailto:hansinirathnayaka98@gmail.com" className="text-lg font-bold hover:text-purple-400 transition-colors">hansinirathnayaka98@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-purple-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Call Me</p>
                    <p className="text-lg font-bold">+94 70 291 7365</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-purple-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Location</p>
                    <p className="text-lg font-bold">Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full py-4 gradient-bg text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  Send Message <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <a href="#" className="text-2xl font-bold font-display gradient-text">Hansini Rathnayaka</a>
            
            <div className="flex items-center gap-6 text-slate-400">
              <a href="https://github.com/Hansini98-R" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
              <a href="http://www.linkedin.com/in/hansini-rathnayaka-0a4195200/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.behance.net/hansinirathnayakauor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><BehanceIcon size={20} /></a>
              <a href="mailto:hansinirathnayaka98@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>

            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Hansini Rathnayaka. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, ClipboardList, GraduationCap, Target, BookOpen, Zap, Lightbulb, TrendingUp, Users, Cpu, CheckCircle, Sun, FileText, Clock, Trophy, BarChart, Phone, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
   const [selectedIndex, setSelectedIndex] = useState(0); 
   const [selected, setSelected] = useState("SSC Exams");
  const containerRef = useRef(null);
  const router = useRouter();

  const scrollTabs = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 200;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

const exams = [
  {
    label: "SSC MTS",
    icon: "/icons/SSC CGL.png",
  },
  {
    label: "SSC CHSL",
    icon: "/icons/SSC CGL.png",
  },
  {
    label: "RRB ALP",
    icon: "/icons/IB ACIO.png",
  },
  {
    label: "SSC Selection Post",
    icon: "/icons/SSC CGL.png",
  },
  {
    label: "SSC Stenographer",
    icon: "/icons/SSC CGL.png",
  },
  {
    label: "SI Security Assistant",
    icon: "/icons/IB ACIO.png",
  },
  {
    label: "SSC CPO",
    icon: "/icons/SSC CGL.png",
  },
  {
    label: "Delhi Police Constable",
    icon: "/icons/Delhi Police Head Constable.png",
  },
  {
    label: "SSC GD Constable",
    icon: "/icons/SSC CGL.png",
  },
  {
    label: "Delhi Police Head Constable",
    icon: "/icons/Delhi Police Head Constable.png",
  },
];

  const stats = [
    {
      label: "Registered Students",
      value: "20K+",
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      iconBg: "bg-blue-100",
      cardBg: "bg-blue-50",
    },
    {
      label: "Mock Test",
      value: "1.5K+ Available",
      icon: <ClipboardList className="w-5 h-5 text-purple-600" />,
      iconBg: "bg-purple-100",
      cardBg: "bg-purple-50",
    },
    {
      label: "Exam Series",
      value: "250+ Available",
      icon: <Target className="w-5 h-5 text-rose-600" />,
      iconBg: "bg-rose-100",
      cardBg: "bg-rose-50",
    },
  ];
  const tabs = [
  "SSC Exams", "JEE", "NEET", "PG Entrance Exams", "MBA Entrance Exam",
  "CUET and UG Entrance", "Banking Exams", "Civil Services Exam", "Railways",
];


  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
        {/* Logo */}
          <div className="flex items-center">
          <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent tracking-tight">
            Modi Classes
          </h1>
          <div className="ml-2 w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="https://learn.thepreplab.in/">
            <button className="px-6 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
              Login
            </button>
          </Link>
          <Link href="https://learn.thepreplab.in/">
            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen flex items-center justify-center text-white px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Professional background decorative elements */}
        <motion.div 
          className="absolute top-32 left-16 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse duration-[4000ms]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-32 right-16 w-80 h-80 bg-cyan-500/8 rounded-full blur-2xl animate-pulse duration-[6000ms]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/3 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.2 }}
        ></motion.div>

        <div className="max-w-5xl mx-auto text-center z-10">
          {/* Main heading */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Premier Physics Coaching Institute
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Master Physics.
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Crack JEE & NEET.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Structured coaching from Class 8th to +2 with proven results, expert faculty, 
            and cutting-edge pedagogy that has helped thousands achieve their dreams.
          </motion.p>

          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.button 
              onClick={() => router.push('https://learn.thepreplab.in/')}
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Join Modi Classes
            </motion.button>
            
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Modi Physics Classes Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f172a] py-24 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center mb-8">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/25"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                Why Choose Modi Physics Classes?
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Experience revolutionary physics education with cutting-edge methodology and proven results
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Structured Learning */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-blue-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <BookOpen className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">Structured Learning</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  From NCERT fundamentals to advanced concepts, our progressive curriculum builds unshakeable foundations for academic excellence.
                </p>
              </div>
            </motion.div>

            {/* Exam-Focused Prep */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-red-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-200 transition-colors">Exam-Focused Prep</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Strategic JEE & NEET preparation with comprehensive pattern analysis and targeted practice sessions.
                </p>
              </div>
            </motion.div>

            {/* Concept Clarity */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-yellow-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/25 group-hover:shadow-yellow-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Lightbulb className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors">Concept Clarity</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Complex physics concepts simplified through innovative visual learning and practical real-world applications.
                </p>
              </div>
            </motion.div>

            {/* Results-Driven */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-green-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <TrendingUp className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors">Results-Driven</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Data-driven methodology with comprehensive assessments and detailed performance analytics for continuous improvement.
                </p>
              </div>
            </motion.div>

            {/* Personalized Guidance */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-orange-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">Personalized Guidance</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Small batch sizes ensuring individual attention with completely customized learning paths for every student.
                </p>
              </div>
            </motion.div>

            {/* Modern Pedagogy */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-purple-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Cpu className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Modern Pedagogy</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  AI-enhanced learning environment with interactive physics simulations and comprehensive digital resources.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

    

      {/* Courses We Offer Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 py-24 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center mb-8">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl shadow-red-500/25"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent">
                Courses We Offer
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive physics education tailored for every learning stage
            </p>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Class 8th - 10th (Foundation) */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-blue-700 transition-colors">Class 8th – 10th (Foundation)</h3>
                  <motion.ul 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">Strong CBSE Physics base</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">Conceptual clarity for higher classes</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">Olympiad & NTSE prep</span>
                    </motion.li>
                  </motion.ul>
                </div>
              </div>
            </motion.div>

            {/* Class 11th - 12th (Advanced) */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-green-100 hover:border-green-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-3xl hover:shadow-green-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-green-700 transition-colors">Class 11th – 12th (Advanced)</h3>
                  <motion.ul 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">Detailed CBSE Physics</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">JEE (Main + Advanced) practice</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">NEET Physics speed training</span>
                    </motion.li>
                  </motion.ul>
                </div>
              </div>
            </motion.div>

            {/* Crash & Revision Batches */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-cyan-100 hover:border-cyan-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-3xl hover:shadow-cyan-500/10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-cyan-700 transition-colors">Crash & Revision Batches</h3>
                  <motion.ul 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">Last-minute exam boosters</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">Mock tests & recap notes</span>
                    </motion.li>
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={() => router.push('https://learn.thepreplab.in/')}
              className="px-12 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now & Transform Your Future
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f172a] py-24 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse duration-[3000ms]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse duration-[4000ms]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center mb-8">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl shadow-yellow-500/25"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Sun className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                Key Features
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive tools and methodologies designed for your success
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Row 1 */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-blue-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <FileText className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">Daily Practice Problems</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Curated physics problems for consistent skill building</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-orange-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <BarChart className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">Weekly Tests & Analysis</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Comprehensive performance tracking and improvement insights</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-teal-900/20 backdrop-blur-sm border border-teal-700/50 rounded-3xl p-8 hover:border-teal-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/25 group-hover:shadow-teal-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors">Focus on Numericals</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Specialized numerical problem-solving techniques</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-purple-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">One-on-One Doubts</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Personalized doubt resolution sessions</p>
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-pink-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <BarChart className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-200 transition-colors">Performance Reports</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Detailed analytics and progress monitoring</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-cyan-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">Interactive Sessions</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Engaging live physics demonstrations</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-gray-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gray-500/25 group-hover:shadow-gray-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <Clock className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">Time Management Tips</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Strategic exam time optimization techniques</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-yellow-900/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/25 group-hover:shadow-yellow-500/40 transition-all duration-300"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <Trophy className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors">Olympiad & NTSE Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Specialized training for competitive excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Ready to Excel in Physics CTA Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#2d4a87] via-[#1e3a8a] to-[#1e40af] py-24 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to Excel in Physics?
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Join Modi Physics Classes and take the first step toward JEE & NEET success.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={() => router.push('https://learn.thepreplab.in/')}
              className="px-12 py-5 text-lg font-bold text-blue-600 bg-white rounded-full hover:bg-blue-50 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:scale-110 border-2 border-transparent hover:border-blue-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              Join Modi Classes
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>


      {/* Footer */}
      <motion.footer 
        className="relative bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] pt-16 pb-8 px-6 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <motion.div 
            className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <h1 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">
                  Modi Physics Classes
                </h1>
                <div className="ml-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full animate-pulse"></div>
              </div>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed max-w-md mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                The premier physics coaching institute helping students excel in JEE, NEET, and competitive exams with proven methodology and expert guidance.
              </motion.p>
              
              {/* Contact Information */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Contacts</h3>
                <motion.div 
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="font-medium">Sanjay Modi</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="font-medium">+946346323</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Social Media Section */}
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center lg:text-right">
                <motion.h4 
                  className="text-2xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Socials
                </motion.h4>
                <motion.div 
                  className="flex justify-center lg:justify-end space-x-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25">
                      <FaFacebookF className="w-6 h-6 text-white" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="#" className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-pink-500/25">
                      <FaInstagram className="w-6 h-6 text-white" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/25">
                      <FaTwitter className="w-6 h-6 text-white" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="#" className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/25">
                      <FaTiktok className="w-6 h-6 text-white" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-gray-600/50 pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                className="text-gray-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Modi Physics Classes. All rights reserved.
              </motion.p>
              <motion.div 
                className="flex items-center space-x-6 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ArrowRight, Activity, Shield, BarChart3, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">MediTrack</h1>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://github.com/skyxwalker/MediTrack-Medical_Store_Inventory_Management_And_POS_System.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 group"
          >
            <Github className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">GitHub</span>
          </motion.a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
                Medi<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Track</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </motion.div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 mb-6 font-light px-4">
              Medical Store Inventory Management & POS System
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Streamline your pharmaceutical operations with our comprehensive inventory and point-of-sale management solution. 
              Built for efficiency, designed for growth.
            </p>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto px-4"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all duration-300">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white text-xs sm:text-sm font-medium">Real-time</p>
              <p className="text-slate-400 text-xs">Inventory</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all duration-300">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-2" />
              <p className="text-white text-xs sm:text-sm font-medium">Secure</p>
              <p className="text-slate-400 text-xs">Access Control</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all duration-300">
              <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mx-auto mb-2" />
              <p className="text-white text-xs sm:text-sm font-medium">Advanced</p>
              <p className="text-slate-400 text-xs">Analytics</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all duration-300">
              <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white text-xs sm:text-sm font-medium">Complete</p>
              <p className="text-slate-400 text-xs">POS System</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            onClick={() => navigate('/showcase')}
            className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="flex items-center space-x-3">
              <span>Explore Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.button>
        </div>
      </main>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-4 sm:left-10 opacity-30">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-sm"
        />
      </div>
      <div className="absolute bottom-1/4 right-4 sm:right-16 opacity-20">
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-sm"
        />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-25 hidden sm:block">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="w-12 h-12 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-full blur-sm"
        />
      </div>

    </div>
  );
};

export default HomePage;
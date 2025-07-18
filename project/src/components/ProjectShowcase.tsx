import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Package, ShoppingCart, BarChart3, Shield, Activity, UserCheck, Database, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

const ProjectShowcase: React.FC = () => {
  const navigate = useNavigate();

  const adminFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Admin Authentication & Dashboard",
      description: "Secure session-based login with comprehensive analytics dashboard showing total sales, inventory performance, and vendor insights."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Staff Management",
      description: "Complete staff lifecycle management with role assignments, access level controls, and individual performance monitoring."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Vendor Management",
      description: "Comprehensive vendor registration with profile images, ID proof uploads, and automated order list generation."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Advanced Inventory Management",
      description: "Full inventory control with batch tracking, pricing management, expiry monitoring, and automated low stock alerts."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Sales Monitoring & Reports",
      description: "Detailed sales analytics with filtering capabilities and exportable reports for comprehensive business insights."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Order Recommendations",
      description: "Intelligent reorder suggestions for low-stock medicines with vendor grouping and printable purchase orders."
    }
  ];

  const staffFeatures = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Point of Sale (POS)",
      description: "Real-time sales processing with automatic inventory deduction and mandatory prescription uploads for high-priority medicines."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Management",
      description: "Seamless customer profile creation during sales with comprehensive purchase history tracking and search capabilities."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Inventory Lookup",
      description: "Quick inventory searches by name or rack number with real-time stock levels, expiry dates, and priority indicators."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Personal Analytics",
      description: "Individual sales history tracking with date filtering and personal performance metrics contribution analysis."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="p-6 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">MediTrack</h1>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Screenshots Carousel */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Project Screenshots</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <ImageCarousel />
        </motion.section>

        {/* Project Description */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">About MediTrack</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            <div className="prose prose-lg text-slate-600 max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-center">
                MediTrack is a robust and scalable pharmaceutical inventory and point-of-sale (POS) management system 
                designed to streamline operations in a medical retail environment. The system provides centralized control 
                for administrators and structured workflows for staff, ensuring real-time inventory tracking, accurate 
                sales processing, and effective vendor and customer management.
              </p>
              <p className="text-lg leading-relaxed text-center mb-8">
                The platform leverages <strong>Laravel with Livewire</strong> to deliver a responsive, secure, and user-centric 
                experience. By implementing role-based access, MediTrack separates administrative controls from operational 
                staff tasks, optimizing workflow efficiency and data integrity across all levels.
              </p>
              
              {/* Tech Stack */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Built With</h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                        <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033.012.009.025.018.037.027.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.027.014-.013.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.018.021.024.033.01.02.017.038.024.058.003.011.01.021.013.032.009.032.013.065.013.098zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.02-.028-.032v-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" fill="#FF2D20"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-sm">Laravel</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#777BB4"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-sm">PHP</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#FB70A9">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-sm">Livewire</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#E34F26">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-sm">HTML5</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#06B6D4">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-sm">Tailwind CSS</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#4479A1">
                        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.082c.055-5.923.121-6.609.121-6.609s.028-.08.036-.12c.025-.16.08-.27.134-.34.067-.08.154-.12.274-.14.067-.014.18-.03.307-.03h1.16c.027 0 .051.014.051.014.053.026.08.08.094.134.014.054.025.134.025.2v.254c0 .134-.011.24-.025.334-.014.094-.025.2-.04.334l1.079-3.216c.027-.08.067-.134.134-.18.067-.04.134-.067.2-.067h.682c.067 0 .134.027.2.067.067.046.107.1.134.18l1.079 3.216c-.015-.134-.026-.24-.04-.334-.014-.094-.025-.2-.025-.334v-.254c0-.066.011-.146.025-.2.014-.054.041-.108.094-.134 0 0 .024-.014.051-.014h1.16c.127 0 .24.016.307.03.12.02.207.06.274.14.054.07.109.18.134.34.008.04.036.12.036.12s.066.686.121 6.609h-.765a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41zM24 7.705c0-.205-.04-.378-.134-.534-.094-.155-.214-.298-.376-.417a1.963 1.963 0 00-.611-.298c-.248-.067-.594-.101-1.061-.101-.3 0-.573.028-.819.087-.245.06-.479.143-.699.25-.22.108-.417.234-.591.38-.174.145-.295.298-.376.45-.074.18-.11.4-.11.65 0 .313.1.6.3.861.2.26.48.49.84.69.36.2.8.37 1.32.51.52.14.98.26 1.38.36.4.1.74.21 1.02.33.28.12.42.27.42.45 0 .18-.08.32-.24.42-.16.1-.38.15-.66.15-.54 0-1.26-.15-2.16-.45v.72c.2.08.44.15.72.21.28.06.58.09.9.09.32 0 .61-.03.87-.09.26-.06.48-.15.66-.27.18-.12.32-.27.42-.45.1-.18.15-.39.15-.63 0-.32-.1-.6-.3-.84-.2-.24-.48-.45-.84-.63-.36-.18-.8-.34-1.32-.48-.52-.14-.98-.27-1.38-.39-.4-.12-.74-.25-1.02-.39-.28-.14-.42-.31-.42-.51 0-.2.08-.36.24-.48.16-.12.38-.18.66-.18.54 0 1.26.15 2.16.45v-.72c-.2-.08-.44-.15-.72-.21-.28-.06-.58-.09-.9-.09z"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-sm">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Admin Features */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Admin-Side Functionalities</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{feature.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Staff Features */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Staff-Side Functionalities</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {staffFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{feature.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">MediTrack</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 text-sm">
                © 2024 MediTrack. Medical Store Inventory Management & POS System.
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Built with Laravel, Livewire, and modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectShowcase;
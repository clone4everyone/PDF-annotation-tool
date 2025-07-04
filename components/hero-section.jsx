'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Highlighter as Highlight, MessageCircle, Share2, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-blue-600">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide uppercase">Professional PDF Tool</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Annotate PDFs with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Precision</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your PDF workflow with intelligent annotations, seamless collaboration, and powerful markup tools. Perfect for professionals, students, and teams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Annotating
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-blue-300 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No signup required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>100% secure</span>
              </div>
            </div>
          </div>

          {/* Right column - Visual elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Main PDF mockup */}
              <Card className="bg-white shadow-2xl rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <span className="font-semibold text-gray-900">Research Paper.pdf</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-yellow-200 rounded animate-pulse delay-100"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse delay-200"></div>
                    <div className="h-4 bg-blue-200 rounded animate-pulse delay-300"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse delay-400"></div>
                  </div>
                </div>
              </Card>

              {/* Floating annotation tools */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                <Highlight className="w-6 h-6 text-yellow-500" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-bounce animation-delay-1000">
                <MessageCircle className="w-6 h-6 text-blue-500" />
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white rounded-full p-4 shadow-lg animate-bounce animation-delay-2000">
                <Share2 className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
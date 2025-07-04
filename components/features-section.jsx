'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Highlighter as Highlight, MessageCircle, Share2, Layers, Zap, Shield, Users, Download } from 'lucide-react';

const features = [
  {
    icon: Highlight,
    title: 'Smart Highlighting',
    description: 'Intelligent text selection with multiple color options and transparency controls for precise annotations.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    delay: 0
  },
  {
    icon: MessageCircle,
    title: 'Collaborative Comments',
    description: 'Real-time commenting system with threaded discussions and @mentions for seamless team collaboration.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    delay: 200
  },
  {
    icon: Share2,
    title: 'Instant Sharing',
    description: 'Share annotated PDFs instantly with customizable permissions and access controls.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    delay: 400
  },
  {
    icon: Layers,
    title: 'Advanced Markup',
    description: 'Professional markup tools including shapes, arrows, stamps, and digital signatures.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    delay: 600
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with instant loading and smooth scrolling for large documents.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    delay: 800
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, secure cloud storage, and compliance with industry standards.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    delay: 1000
  }
];

export default function FeaturesSection() {
  const [visibleFeatures, setVisibleFeatures] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleFeatures(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = document.querySelectorAll('[data-feature]');
    featureElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Every Workflow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to annotate, collaborate, and share PDFs professionally. 
            Built for teams, optimized for productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures.has(index.toString());
            
            return (
              <Card 
                key={index}
                data-feature
                data-index={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional stats section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-8 h-8 text-blue-600" />
                <span className="text-3xl font-bold text-gray-900">10M+</span>
              </div>
              <p className="text-gray-600">Active Users</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Download className="w-8 h-8 text-purple-600" />
                <span className="text-3xl font-bold text-gray-900">100M+</span>
              </div>
              <p className="text-gray-600">PDFs Processed</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-8 h-8 text-green-600" />
                <span className="text-3xl font-bold text-gray-900">99.9%</span>
              </div>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
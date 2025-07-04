'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Upload, 
  FileText, 
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';

export default function CTASection() {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file drop (placeholder)
    console.log('File dropped');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase">Get Started Today</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> PDF Experience?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join millions of professionals who trust our platform for their PDF annotation needs. 
            Start annotating in seconds, no account required.
          </p>
        </div>

        {/* File Upload Area */}
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 transition-all duration-300 ${
                isDragOver 
                  ? 'border-blue-400 bg-blue-50' 
                  : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-gray-50'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center space-y-6">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDragOver ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Upload className={`w-10 h-10 transition-colors duration-300 ${
                    isDragOver ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                </div>
                
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Drop your PDF here or click to browse
                  </h3>
                  <p className="text-gray-500">
                    Supports PDF files up to 100MB. Your files are processed securely.
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <FileText className="mr-2 w-5 h-5" />
                  Choose PDF File
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits list */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">No registration required</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">Files automatically deleted</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">256-bit SSL encryption</span>
          </div>
        </div>

        {/* Alternative CTA */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to see it in action first?
          </h3>
          <p className="text-gray-600 mb-6">
            Try our interactive demo with a sample PDF to explore all features.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-blue-300 transition-all duration-300"
          >
            Launch Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
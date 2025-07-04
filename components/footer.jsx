import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Github, 
  Twitter, 
  Linkedin,
  Heart
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">PDF Annotator</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Professional PDF annotation tool trusted by millions. Collaborate, annotate, and share documents with ease.
            </p>
            
            <div className="flex space-x-4">
            <a 
  href="https://github.com/clone4everyone" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    variant="ghost" 
    size="sm" 
    className="text-gray-400 hover:text-black p-2"
  >
    <Github className="w-5 h-5" />
  </Button>
</a>

           <a
            href="https://www.linkedin.com/in/karan-rawat-869931292/" 
  target="_blank" 
  rel="noopener noreferrer"
           >
             <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white p-2"
              >
                <Linkedin className="w-5 h-5" />
              </Button> 
           </a>
            
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 PDF Annotator. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Karan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
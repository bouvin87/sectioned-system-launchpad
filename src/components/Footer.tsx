
const Footer = () => {
  return (
    <footer className="bg-dark-text-blue text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">System by Sections</h3>
            <p className="text-gray-text leading-relaxed max-w-md">
              Modular digital platform for manufacturing and production companies. 
              Digitize your operations, section by section.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-text hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-text hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-text hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-text hover:text-white transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-text hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-text hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-text text-sm">
              © 2024 System by Sections. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-text hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-text hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-text hover:text-white transition-colors text-sm">
                GDPR Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

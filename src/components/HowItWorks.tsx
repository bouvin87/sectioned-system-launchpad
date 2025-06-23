
const steps = [
  {
    number: "01",
    title: "Choose your modules",
    description: "Select from our library of production modules. Start with what you need most and add more later."
  },
  {
    number: "02", 
    title: "Invite your team",
    description: "Add unlimited team members at no extra cost. Set up roles and permissions for different departments."
  },
  {
    number: "03",
    title: "Start logging and improving",
    description: "Begin digitizing your processes immediately. Track performance and identify improvement opportunities."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-text-blue mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Get started in minutes, not months. Our streamlined setup gets your team productive fast.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-blue text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-blue/90 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-dark-text-blue mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-8 transform translate-x-1/2">
                    <div className="w-8 h-px bg-slate-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

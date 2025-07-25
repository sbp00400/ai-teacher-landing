const steps = [
    {
      title: "Step 1: Take Diagnostic Test",
      description: "Start with a quick test to assess your strengths and weaknesses.",
    },
    {
      title: "Step 2: AI Analyzes You",
      description: "Our AI builds your learning profile — your mindset, strategy, and concept gaps.",
    },
    {
      title: "Step 3: Learn & Improve",
      description: "Get custom-tailored learning paths, motivation nudges, and conceptual coaching.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl text-green-400 mb-12">How It Works</h2>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-black border-l-4 border-green-400 p-6 rounded-md text-left shadow-xl"
            >
              <h3 className="text-2xl text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
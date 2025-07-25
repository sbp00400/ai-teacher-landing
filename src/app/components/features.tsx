const features = [
    "Personalized AI learning paths",
    "Mindset & strategy first approach",
    "Live concept tracking and graphs",
    "Motivational nudges & reminders",
  ];
  
  export default function Features() {
    return (
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl text-green-400 mb-10">Features</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-black border border-green-400 rounded-xl shadow-lg">
              <p className="text-lg text-white">{feature}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
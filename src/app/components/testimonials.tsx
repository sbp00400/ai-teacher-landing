const testimonials = [
    {
      name: "Ravi Kumar",
      feedback: "AI Teacher helped me discover how I learn best. Cracked IBPS in one attempt!",
    },
    {
      name: "Sneha Patel",
      feedback: "The mindset-first approach is gold! Felt like I had a real mentor 24/7.",
    },
    {
      name: "Amit Verma",
      feedback: "I never knew learning could be this personalized. Every day felt productive.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-4xl text-green-400 mb-10">What Our Learners Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-green-400 p-6 rounded-lg shadow-lg bg-black">
              <p className="italic text-gray-300 mb-4">&quot;{t.feedback}&quot;</p>
              <p className="text-green-400 font-bold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
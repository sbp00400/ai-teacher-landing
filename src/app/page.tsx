'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Rocket, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 text-gray-800 font-sans">
      <section className="text-center py-24 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4 text-gray-900"
        >
          Your Personal AI Exam Coach
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mb-6 max-w-xl mx-auto text-gray-600"
        >
          Learn smart. Study strategically. Ace competitive exams with your own AI mentor.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Button size="lg">Get Started</Button>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: 'Initial Analysis', desc: 'We analyze your current approach and learning style.' },
              { icon: Users, title: 'Personal AI Coach', desc: 'Get a personalized strategy tailored to your mindset.' },
              { icon: CheckCircle, title: 'Master the Concepts', desc: 'Guided learning to boost understanding and performance.' },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <motion.div 
                key={idx} 
                whileInView={{ opacity: 1, y: 0 }} 
                initial={{ opacity: 0, y: 40 }} 
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                className="p-6 rounded-2xl shadow-md border bg-slate-50"
              >
                <Icon className="h-10 w-10 text-blue-500 mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <motion.div 
                key={idx} 
                whileInView={{ opacity: 1, y: 0 }} 
                initial={{ opacity: 0, y: 20 }} 
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Card className="rounded-xl shadow-sm">
                  <CardContent className="p-6">
                    <Star className="text-yellow-400 mb-2" />
                    <p className="text-sm text-gray-700">
                      “This AI teacher changed how I prepare. It&apos;s like having a personal coach.”
                    </p>
                    <p className="mt-4 text-xs text-gray-500">— Student {idx + 1}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-center">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }} 
          initial={{ opacity: 0, scale: 0.95 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-gray-600 mb-6">Your AI mentor is just one click away.</p>
          <Button size="lg">Join Now</Button>
        </motion.div>
      </section>

      <footer className="text-center py-10 text-sm text-gray-500">
        &copy; 2025 AI Teacher. Built with ❤️
      </footer>
    </main>
  );
}

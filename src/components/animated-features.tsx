'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
  title: string;
  icon: string;
  description: string;
}

const features: Feature[] = [
  { title: "Advanced AI-powered data management", icon: "🧠", description: "Leverage cutting-edge AI to manage and analyze your data efficiently." },
  { title: "Real-time analytics and insights", icon: "📊", description: "Get instant insights with our real-time analytics capabilities." },
  { title: "Seamless integration with existing systems", icon: "🔗", description: "Easily integrate our platform with your current tech stack." },
  { title: "Customizable dashboards and reports", icon: "📈", description: "Create tailored dashboards and reports to suit your specific needs." },
  { title: "Automated workflow optimization", icon: "⚙️", description: "Streamline your processes with our automated workflow tools." },
  { title: "Predictive maintenance capabilities", icon: "🔮", description: "Anticipate and prevent issues before they occur with predictive maintenance." },
  { title: "Natural language processing for data queries", icon: "💬", description: "Query your data using natural language for easier access." },
  { title: "Scalable cloud-based infrastructure", icon: "☁️", description: "Our cloud-based solution grows with your business needs." },
  { title: "24/7 expert support", icon: "🛠️", description: "Get round-the-clock support from our team of experts." },
];

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export function AnimatedFeatures(): JSX.Element {
  const controls = useAnimation();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("onscreen");
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              animate={controls}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-4xl mr-4" aria-hidden="true">{feature.icon}</span>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
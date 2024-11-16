import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO at TechCorp',
    quote: 'Keplit helped us transform our product vision into reality. Their end-to-end development service was top-notch!',
  },
  {
    name: 'Jane Smith',
    position: 'Founder of InnovateTech',
    quote: 'Working with Keplit was an incredible experience. They understood our needs and delivered a seamless MVP.',
  },
  {
    name: 'Alex Johnson',
    position: 'CTO at StartupX',
    quote: 'Keplit’s team did an amazing job refactoring our legacy code and improving our infrastructure. Highly recommend them!',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-red-600 mb-12">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-red-600 text-white p-8 rounded-lg shadow-lg max-w-md"
          >
            <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
            <div className="font-bold text-xl">{testimonial.name}</div>
            <div className="text-sm text-gray-400">{testimonial.position}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

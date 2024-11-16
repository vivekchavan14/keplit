import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
          e.target as HTMLFormElement,
          process.env.REACT_APP_EMAILJS_USER_ID as string
        )
        .then(
          () => {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            setStatus('Something went wrong, please try again.');
          }
        );
    } else {
      setStatus('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-white text-gray-800 py-16 px-6 font-poppins">
      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">Let's Get Your Product Done</h1>
        <p className="text-lg text-gray-500">
          Ready to bring your ideas to life? Reach out to us and let's make it happen.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-4 text-black bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 text-black bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full p-4 text-black bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition duration-300"
          >
            Send Message
          </button>

          {status && (
            <div className={`mt-4 text-center ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;

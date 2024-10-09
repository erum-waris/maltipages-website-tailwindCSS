"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState}  from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    email: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Show the popup message
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center h-screen relative">
      {showPopup && (
        <div className="absolute top-10 md:top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
         Congrates Your message has been sent!
        </div>
      )}

<div className='max-w-md w-full'>
      <form
        onSubmit={handleSubmit}
        className=" shadow-lg rounded-lg p-8 mt-20  "
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="fatherName" className="block text-gray-700">Father Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter father's name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
</div>
    <div className='flex justify-center gap-10 mb-0 md:mb-5'> 
     <Link href="https://github.com/erum-waris">  <Image src="/images/git.png" alt="github" width={80} height={100}
      className="mt-10 rounded-lg" /></Link>
      <Link href="https://www.linkedin.com/in/erum-waris-16008b282/"> <Image src="/images/linkedinicon.png" alt="email" width={80} height={80}
      className="mt-10 bg-blue-100 rounded-lg "/></Link>
    </div>
    </div> 
  );
};

export default ContactForm;

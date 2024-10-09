


import Image from 'next/image';

import Button from './Button';

const AboutMe = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-12 md:max-h-screen">
       
      <div className="text-left w-auto h-md p-6 text-black space-y-2 lg:w-1/2  rounded-lg transition duration-700 ease-in-out transform hover:scale-105">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-pink-500 to-purple-500 ">ABOUT ME</h1>
        <h1 className="text-4xl font-bold">I am a Passionate FrontEnd Developer</h1>
        <p className="text-2xl font-semibold">I am creating responsive modern web applications</p>
        <p className="text-2xl font-semibold">I am Student at GIAIC Governer Initiative for Artificial Intelligence Web 3 0 and Metaverse </p>
        <p className="text-2xl font-semibold">As I have been working On HTML CSS Tailwind and Javascript Typescript</p>
        <p className="text-2xl font-semibold">Simultaneously I have been learning React js and Basics of FrontEnd Development in Xounity Online FrontEnd Bootcamp</p>
        <p className="text-2xl font-semibold">Driven by innovation I combine design with seamless functionality</p>
        <Button text="Linked in" href="https://www.linkedin.com/in/erum-waris-16008b282/" />
        <Button text="github" href="https://github.com/erum-waris" />
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:w-1/2 transition duration-700 ease-in-out transform hover:scale-105">
        <Image
          src="/images/AI_img_1.jpeg"
          alt="Developer"
          className="rounded-lg lg:w-full lg:h-full   hover:shadow-xl"
          width={550}
          height={500}
        />
      </div>
    </div>
    </>
  );
};

export default AboutMe;

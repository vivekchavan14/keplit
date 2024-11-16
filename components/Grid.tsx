import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { FaCode, FaCogs, FaCloud } from "react-icons/fa";

const Grid = () => {
  return (
    <section id="about" className="py-16 bg-black">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold text-red-500 mb-12">
        Our Software Solutions
      </h2>

      <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-8">
        {/* Custom Software Development */}
        <BentoGridItem
          className="h-full flex flex-col justify-between items-start p-6 bg-neutral-900 hover:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          title={
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
              Custom Software Development
            </h3>
          }
          description={
            <p className="text-base lg:text-lg text-gray-300">
              Tailored software solutions to meet your unique business needs,
              including mobile apps, web platforms, and enterprise software.
            </p>
          }
          icon={<FaCode className="text-4xl text-red-500 mb-4" />}
        />

        {/* Cloud Solutions */}
        <BentoGridItem
          className="h-full flex flex-col justify-between items-start p-6 bg-neutral-900 hover:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          title={
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
              Cloud Solutions
            </h3>
          }
          description={
            <p className="text-base lg:text-lg text-gray-300">
              Innovative cloud computing solutions ensuring scalability,
              security, and efficiency for your business.
            </p>
          }
          icon={<FaCloud className="text-4xl text-red-500 mb-4" />}
        />

        {/* IT Consultancy */}
        <BentoGridItem
          className="h-full flex flex-col justify-between items-start p-6 bg-neutral-900 hover:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          title={
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
              IT Consultancy
            </h3>
          }
          description={
            <p className="text-base lg:text-lg text-gray-300">
              Expert consultancy to optimize infrastructure, improve workflows,
              and implement the best technologies for your business.
            </p>
          }
          icon={<FaCogs className="text-4xl text-red-500 mb-4" />}
        />

        {/* Product Development */}
        <BentoGridItem
          className="h-full flex flex-col justify-between items-start p-6 bg-neutral-900 hover:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          title={
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
              Product Development
            </h3>
          }
          description={
            <p className="text-base lg:text-lg text-gray-300">
              End-to-end product development, guiding your journey from idea to
              market-ready product with user-centered design.
            </p>
          }
          icon={<FaCode className="text-4xl text-red-500 mb-4" />}
        />

        {/* Data Analytics & AI */}
        <BentoGridItem
          className="h-full flex flex-col justify-between items-start p-6 bg-neutral-900 hover:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          title={
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
              Data Analytics & AI
            </h3>
          }
          description={
            <p className="text-base lg:text-lg text-gray-300">
              Leverage AI-powered data analytics to unlock insights and drive
              decision-making for growth.
            </p>
          }
          icon={<FaCloud className="text-4xl text-red-500 mb-4" />}
        />

        {/* Mobile App Development */}
        <BentoGridItem
          className="h-full flex flex-col justify-between items-start p-6 bg-neutral-900 hover:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          title={
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
              Mobile App Development
            </h3>
          }
          description={
            <p className="text-base lg:text-lg text-gray-300">
              Responsive, intuitive, and feature-rich mobile apps for iOS and
              Android with a focus on seamless user experiences.
            </p>
          }
          icon={<FaCode className="text-4xl text-red-500 mb-4" />}
        />
      </BentoGrid>
    </section>
  );
};

export default Grid;

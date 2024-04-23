import React from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Importing toast notification components
import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for toast notifications
import Image01 from '../Images/image 2.png'; // Importing image file
import Image02 from '../Images/image 1.png'; // Importing image file

// Main component for the frame
export default function Frame() {
  return (
    <div>
      {/* Toast container for displaying notifications */}
      <ToastContainer />
      {/* First FrameComponent with Web & Mobile App Development content */}
      <FrameComponent
        image={Image01}
        title="Web & Mobile App Development"
        description="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
        position="left"
      />
      {/* Second FrameComponent with Digital Strategy Consulting content */}
      <FrameComponent
        image={Image02}
        title="Digital Strategy Consulting"
        description="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
        position="right"
      />
    </div>
  );
}

// Sub-component representing each frame
function FrameComponent({ image, title, description, position }) {
  // Function to display toast notification when "Learn More" button is clicked
  const notify = () => toast.info('Learn more button clicked!');

  return (
    <div className={`flex flex-col sm:flex-row w-full py-[20px] lg:py-[108px] px-[20px] sm:px-[40px] md:px-[152px] lg:px[188px] ${position === 'right' ? 'sm:flex-row-reverse' : ''}`}>
      {/* Image container */}
      <div className="flex justify-center items-center w-full sm:w-1/3 mx-[20px]">
        <img src={image} alt="Frame Image" className="object-cover" />
      </div>
      {/* Content container */}
      <div className="flex flex-col items-center justify-center sm:items-start w-full sm:w-2/3 ">
        {/* Title */}
        <h1 className="text-customPurple font-poppins font-semibold leading-10 tracking-tighter text-center sm:text-left text-[27px] mb-[20px]">{title}</h1>
        {/* Description */}
        <p className="font-inter font-normal leading-6 text-center sm:text-left text-[16px] mb-[20px]">{description}</p>
        {/* Button to learn more */}
        <button onClick={notify} className="font-inter text-white bg-customOrange w-fit font-bold text-[14px] py-[12px] px-[20px]">LEARN MORE</button>
      </div>
    </div>
  );
}

import Image01 from '../Images/image 2.png';

export default function Frame01() {
  return (
    <div className="flex flex-col sm:flex-row w-full px-4 py-4 sm:px-20 sm:py-4">
      <div className="flex justify-center items-center w-full sm:w-1/3">
        <img src={Image01} alt="Image01" className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center sm:items-start w-full sm:w-2/3 mr-8">
        <h1 className="text-customPurple font-poppins text-3xl font-semibold leading-10 tracking-tighter mb-3 text-center sm:text-left">Web & Mobile App Development</h1>
        <p className="font-inter text-base font-normal leading-6 text-center sm:text-left mb-4">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
        <button className="font-inter text-white bg-customOrange text-sm font-bold py-3 px-4 w-fit">LEARN MORE</button>
      </div>
    </div>
  );
}

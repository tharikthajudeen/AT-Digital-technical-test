import Image02 from '../Images/image 1.png';

export default function Frame02() {
  return (
    <div className="flex flex-col sm:flex-row w-full px-4 py-4 sm:px-20 sm:py-4">
      <div className="flex justify-center items-center w-full sm:w-1/3 order-1 sm:order-2">
        <img src={Image02} alt="Image02" className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center sm:items-start w-full sm:w-2/3 mr-8 order-2 sm:order-1">
        <h1 className="text-customPurple font-poppins text-3xl font-semibold leading-10 tracking-tighter mb-3 text-center sm:text-left">Digital Strategy Consulting</h1>
        <p className="font-inter text-base font-normal leading-6 text-center sm:text-left mb-4">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
        <button className="font-inter text-white bg-customOrange text-sm font-bold py-3 px-4 w-fit">LEARN MORE</button>
      </div>
    </div>
  );
}

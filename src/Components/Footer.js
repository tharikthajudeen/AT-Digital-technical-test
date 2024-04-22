export default function Footer(){

    return (
        <footer className="bg-customPurple text-white pt-[40px] pr-[20px] pb-[20px] pl-[20px] sm:pt-[40px] sm:pr-[60px] sm:pb-[20px] sm:pl-[60px]">
          <div className="flex flex-col sm:flex-row w-full text-sm"> 
            <div className="w-full sm:w-3/5 mb-[60px]">
                <h1 className="font-serif font-bold text-[25px] mb-[20px] ">AT DIGITAL</h1>
                <p className="w-full sm:w-3/4 font-lato text-base font-normal  text-left leading-[19.2px]">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </div>
            <div className="font-inter w-full sm:w-1/5 sm:mr-[12px] mb-[40px]">
                <h1 className="font-bold text-[21px] mb-[12px]">Our Technologies</h1>
                <p className="mb-[12px] text-[14px]">ReactJS</p>
                <p className="mb-[12px] text-[14px]">Gatesby</p>
                <p className="mb-[12px] text-[14px]">NectJS</p>
                <p className="mb-[12px] text-[14px]">NodeJS</p>
            </div>
            <div className="font-inter w-full sm:w-1/5 mb-[20px]">
                <h1 className="mb-[12px] text-[21px] font-bold">Our Services</h1>
                <p className="mb-[12px] text-[14px]">Social Media Marketing</p>
                <p className="mb-[12px] text-[14px]">Web & Mobile App Development</p>
                <p className="mb-[12px] text-[14px]">Data & Analytics</p>
            </div>
         </div>
         <div className="flex flex-col w-full justify-center items-center ">
            <div className="border border-solid border-t w-full sm:w-[630px] mb-[8px]"/>
            <div className="flex justify-center items-center">
                <p className="mr-3 text-[14px]">Privacy Policy</p>
                <div className="border border-solid border-l h-[16px]"/>
                <p className="ml-3 text-[14px]"> Terms & Conditions</p>
            </div>
         </div>
        </footer>

    )
}
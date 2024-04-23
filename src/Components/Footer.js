import Logo from '../Images/Logo.png'

export default function Footer() {
    return (
        <footer className="bg-customPurple text-white pt-[40px] pr-[20px] pb-[20px] pl-[20px] xl:pt-[40px] xl:pr-[80px] xl:pb-[40px] xl:pl-[80px] lg:pt-[40px] lg:pr-[60px] lg:pb-[20px] lg:pl-[60px] md:pt-[20px] md:pr-[40px] md:pb-[20px] md:pl-[40px]">
            {/* Footer Content */}
            <div className="flex flex-col md:flex-row sm:flex-col w-full mb-[20px] md:mb-[0px]">
                {/* About Section */}
                <div className="w-full md:w-3/5 mb-[40px]">
                    <div className='mb-[20px]'>
                        <img src={Logo} className='object-cover'/>
                    </div>
                    <p className="font-lato text-base font-normal text-left w-full sm:w-2/3 leading-[19.2px]">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
                </div>

                <div className="font-inter flex flex-col sm:flex-row w-full md:w-2/4 sm:mr-[12px]">
                    {/* Technologies Section */}
                    <div className='w-full sm:w-1/2 mr-[10px]'>
                        <h1 className="font-bold text-[21px] mb-[12px]">Our Technologies</h1>
                        <ul className="list-none pl-0 mb-12">
                            <li className="mb-[12px] text-[14px]"><a href="#">ReactJS</a></li>
                            <li className="mb-[12px] text-[14px]"><a href="#">Gatsby</a></li>
                            <li className="mb-[12px] text-[14px]"><a href="#">NextJS</a></li>
                            <li className="mb-[12px] text-[14px]"><a href="#">NodeJS</a></li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="w-full sm:w-1/2">
                        <h1 className="font-bold mb-[12px] text-[21px]">Our Services</h1>
                        <ul className="list-none pl-0 mb-[12px]">
                            <li className="mb-[12px] text-[14px]"><a href="#">Social Media Marketing</a></li>
                            <li className="mb-[12px] text-[14px]"><a href="#">Web & Mobile App Development</a></li>
                            <li className="mb-[12px] text-[14px]"><a href="#">Data & Analytics</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col w-full justify-center items-center">
                {/* Divider */}
                <div className="border border-solid border-t w-full sm:w-[630px] mb-[8px]" />
                {/* Legal Links */}
                <div className="flex justify-center items-center text-[14px]">
                    <a href="privacy-policy-url" className="mr-3">Privacy Policy</a>
                    <div className="border border-solid border-l h-[16px]"/>
                    <a href="terms-conditions-url" className="ml-3"> Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
}

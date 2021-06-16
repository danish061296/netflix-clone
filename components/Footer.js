import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/solid';
function Footer() {
  return (
    <div className="bg-black text-[rgb(117,117,117)] flex flex-col  ">
      <div className="pt-10 md:pt-20 ml-[40px] text-sm sm:px-[80px]">
        <h2>Questions? Call 1-123-456-789</h2>
      </div>
      <div className="grid grid-cols-2 ml-10 my-10 md:ml-0 md:flex  md:items-center md:justify-around md:py-10">
        <div className="space-y-3 text-sm flex flex-col">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Ways to watch</p>
          <p>Corporate Information</p>
          <p>Netflix Originals</p>
        </div>
        <div className="space-y-3 text-sm flex flex-col">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
        <div className="space-y-3 text-sm flex flex-col">
          <p>Account</p>
          <p>Redeem Gift Cards</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div className="space-y-3 text-sm flex flex-col">
          <p>Media Center</p>
          <p>Buy Gift Cards</p>
          <p>Cookie Preferences</p>
          <p>Legal Notice</p>
        </div>
      </div>
      <div className="border border-[rgb(117,117,117)] mb-5 ml-10 py-3 rounded flex justify-around w-[150px] md:ml-[120px] md:mb-10">
        <GlobeAltIcon className="text-[rgb(117,117,117)] h-6 w-6" />
        <p className=" text-lg">English</p>
        <ChevronDownIcon className="h-5 w-5 text-[rgb(117,117,117)] mt-1" />
      </div>
    </div>
  );
}

export default Footer;

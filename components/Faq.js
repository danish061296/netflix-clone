import { PlusIcon } from '@heroicons/react/outline';
import 'tailwindcss/tailwind.css';

function Faq() {
  const faqs = [
    'What is Netflix?',
    'How much does Netfix cost?',
    'Where can I watch?',
    'How do I cancel?',
    'What can I watch on Netflix?',
    'Is Netflix good for kids?',
  ];

  return (
    <div className="bg-black">
      <div className="py-10 bg-black">
        <h1 className="text-white text-2xl md:text-5xl font-semibold text-center">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
        {faqs &&
          faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#303030] py-2  w-4/5  flex items-center justify-between px-10 md:py-5 md:w-3/5"
            >
              <h3 className=" text-white text-lg md:text-3xl">{faq}</h3>
              <PlusIcon className="h-6 w-6 md:h-10 md:w-10 text-white text-sm md:text-lg" />
            </div>
          ))}
      </div>
      <div className="flex flex-col items-center justify-center py-5 md:py-[70px]">
        <h1 className="text-white text-center text-lg px-2 md:px-0 md:text-xl ">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className="flex flex-col items-center md:flex-row mt-4 space-y-4 md:space-y-0">
          <input
            placeholder="Email address"
            type="text"
            className="bg-white rounded md:rounded-none p-3 md:p-4 w-[330px] md:min-w-[400px] outline-none"
          />
          <button
            onClick={() => signIn('google')}
            className="flex items-center bg-[#DF0714]  px-4 py-2 w-[143px] rounded text-white text-lg md:text-xl md:py-4 md:rounded-none md:w-[180px] ml-1 outline-none hover:bg-red-500 focus:outline-none"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-2 bg-[#222323] index-20 w-full text-white"></div>
    </div>
  );
}

export default Faq;

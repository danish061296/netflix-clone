import Head from 'next/head';
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/client';
import Service from '../components/Service';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center bg-black z-0 h-screen"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0 0 0 / 60%),rgba(0 0 0 / 60%)), url(/hero-bg.jpg)',
        }}
      >
        <Head>
          <title>Netflix-Clone</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <header className="flex justify-between w-full px-8 py-8">
          <div>
            <svg
              viewBox="0.238 0.034 919.406 248.488"
              className="w-20  md:w-32 md:ml-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M870.46 118.314l49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
                fill="#e50914"
              />
            </svg>
          </div>
          <div>
            {!session ? (
              <div className="flex space-x-2 md:space-x-6">
                <div className="border border-gray-200 px-1 py-1 md:py-2 md:px-3 rounded flex justify-around text-gray-200">
                  <GlobeAltIcon className=" h-6 w-6" />
                  <p className=" text-md ">English</p>
                  <ChevronDownIcon className="h-5 w-5  mt-1" />
                </div>
                <button
                  onClick={() => signIn('google')}
                  className="flex items-center bg-[#DF0714] text-white text-sm md:text-md px-5 md:px-7 md:py-2 rounded 
               ml-1 outline-none hover:bg-red-500 focus:outline-none"
                >
                  Sign In
                </button>
              </div>
            ) : (
              <button
                onClick={() => signOut()}
                className="flex items-center bg-[#DF0714] text-white text-sm md:text-md md:px-7 md:py-2 rounded
               ml-1 outline-none hover:bg-red-500 focus:outline-none"
              >
                Sign Out
              </button>
            )}
          </div>
        </header>

        <main className="relative flex flex-col items-center pt-20 md:justify-center w-full flex-1 px-20 text-center ">
          <h1 className="text-2xl md:text-5xl font-medium text-white max-w-lg tracking-wider">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-white mt-4 mb-8">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-white text-md md:text-lg lg:text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col items-center space-y-3 md:space-y-0 md:flex-row mt-4">
            <input
              placeholder="Email address"
              type="text"
              className="bg-white p-3 md:p-3 w-[330px] md:min-w-[450px] rounded md:rounded-none outline-none"
            />
            <button
              onClick={() => signIn('google')}
              className="flex items-center bg-[#DF0714] p-3 rounded md:rounded-none w-[115px]  text-center text-gray-100 text-sm md:w-[150px]  md:text-xl md:py-3 ml-1 outline-none hover:bg-red-500 focus:outline-none"
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
        </main>
      </div>
      <Service />
      <Faq />
      <Footer />
    </div>
  );
}

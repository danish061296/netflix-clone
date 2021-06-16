function Service() {
  return (
    <div className=" bg-black   ">
      <div className="h-2 bg-[#222323] index-20 w-full text-white"></div>
      <div className="flex flex-col md:flex-row  justify-center items-center pt-70">
        <div className="w-2/3 text-center  md:w-1/3">
          <h1 className="font-bold mb-5 text-white text-2xl md:text-5xl pt-10 md:py-10 tracking-wider">
            Enjoy on your TV.
          </h1>
          <h4 className="text-white text-lg md:text-2xl tracking-wide">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h4>
        </div>
        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            className="h-50 w-50 md:h-100 md:w-100 pb-10"
            alt="netflix tv"
          />
        </div>
      </div>
      <div className="h-2 bg-[#222323] index-20 w-full text-white"></div>
    </div>
  );
}

export default Service;

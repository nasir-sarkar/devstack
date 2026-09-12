import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div id="home" className="container mx-auto px-4 py-16 md:py-24">
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="mt-5 text-base-content/60 max-w-md">
            Explore frontend, backend, database and tooling options, compare
            them, and pick the technologies for your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#technologies" className="btn btn-brand-gradient border-none rounded-lg px-6">
              Explore Technologies
            </a>
            <a href="#about" className="btn btn-outline rounded-lg px-6">
              Learn More
            </a>
            
          </div>

        </div>

        <div className="flex justify-center">
          <img src={BannerImage} alt="banner" className="w-64 md:w-96" />
        
        </div>
      
      </div>
    
    </div>
  );
};

export default Banner;

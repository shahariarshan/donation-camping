

const Banner = () => {
    return (
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/g4PLZLY/23918936-6839702.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold text-black">I Grow By Helping People In Need</h1>
          
          <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        
        </div>
        <div className="mt-5">
       <button className="btn btn-error">Search</button>
       </div>
       
        </div>
      </div>
    </div>
     </div>
    );
};

export default Banner;


const Banner = () => {
  
    
  
    return (
        <div className="mx-auto container">
        <div className="hero min-h-screen text-opacity-80 bg-cover" style={{backgroundImage: 'url(https://i.ibb.co/wzT6pvT/26477318-donation.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold text-black text-opacity-100">I Grow By Helping People In Need</h1>
          
          <div className="form-control">
          <input type="text" 
          id="element"
          placeholder="Search.."
          
           className="input input-bordered md:w-auto " />
          <div className="mt-5">
       <button onClick={"handelSearch"} className="btn btn-error">Search</button>
       </div>
        </div>
        
       
        </div>
      </div>
    </div>
   
     </div>
    );
};

export default Banner;